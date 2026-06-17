import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GreetingMemo } from '../components/GreetingMemo';
import { useClientMutations } from '../common/hooks/useClients';
import { checkSession, login, logout } from '../common/api/auth';
import repo from '../hooks/repo';

const ClientsComponent = ({
  clients,
  person,
  name,
  isLoading,
  error,
  isFetching,
}) => {
  const navigate = useNavigate();
  const [newClientName, setNewClientName] = useState('');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('secret123');
  const [user, setUser] = useState(null);
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const { addClient, removeClient } = useClientMutations();

  useEffect(() => {
    checkSession()
      .then((sessionUser) => setUser(sessionUser))
      .finally(() => setIsSessionLoading(false));
  }, []);

  const navigateToGreetingRef = () => {
    navigate('/ref');
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      setUser(data.user);
    } catch (err) {
      console.error('Login failed:', err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err.message);
    }
  };

  const handleAddClient = async (event) => {
    event.preventDefault();
    if (!newClientName.trim()) return;

    try {
      await addClient.mutateAsync(newClientName.trim());
      setNewClientName('');
    } catch (err) {
      console.error('Failed to add client:', err.message);
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      await removeClient.mutateAsync(id);
    } catch (err) {
      console.error('Failed to delete client:', err.message);
    }
  };

  if (isLoading) {
    return <p>Loading clients from Node.js API...</p>;
  }

  if (error) {
    return (
      <p style={{ color: 'salmon' }}>
        API error: {error}. Uruchom backend: <code>cd server && npm run dev</code>
      </p>
    );
  }

  return (
    <section>
      <h3>Clients (REST API → Node.js + sessions)</h3>

      {isSessionLoading ? (
        <p>Sprawdzanie sesji...</p>
      ) : !user ? (
        <form onSubmit={handleLogin} style={{ marginBottom: '1rem' }}>
          <p>Zaloguj się (httpOnly cookie), żeby dodawać/usuwać klientów:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>
          Zalogowany: {user.email} ({user.role}){' '}
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </p>
      )}

      {isFetching && <small>Refreshing...</small>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {clients.map((client) => (
          <li
            key={client.id}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <span>
              #{client.id} — {client.name}
            </span>
            <button
              type="button"
              onClick={() => handleDeleteClient(client.id)}
              disabled={removeClient.isPending || !user}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddClient} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="New client name"
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
        />
        <button type="submit" disabled={addClient.isPending || !user}>
          Add client (POST)
        </button>
      </form>

      <br />
      <button type="button" onClick={navigateToGreetingRef}>
        Navigate Home page
      </button>
      <button type="button" onClick={repo.saveCall}>
        Save call
      </button>

      <GreetingMemo person={person} name={name} />
    </section>
  );
};

const arePropsEqual = (prevProps, nextProps) =>
  prevProps.clients === nextProps.clients &&
  prevProps.name === nextProps.name &&
  prevProps.person === nextProps.person &&
  prevProps.isLoading === nextProps.isLoading &&
  prevProps.error === nextProps.error &&
  prevProps.isFetching === nextProps.isFetching;

export const Clients = memo(ClientsComponent, arePropsEqual);
