import renderer from 'react-test-renderer';
import { UserForm } from './UserForm';

describe('UserForm test', () => {
  const personDetails = {
    personName: 'no-name',
    adressFirst: 'no-adres',
    adressSecond: 'no-adres',
  };

  test('component renders correctly', () => {
    const tree = renderer
      .create(<UserForm personDetails={personDetails} />)
      .toJSON();

      expect(tree).toMatchSnapshot()
  });
});
