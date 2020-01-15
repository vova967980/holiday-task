import { loadJSON } from '../../../utils';
import createEmployeesList from '../EmployeesList';


loadJSON('/data/employees.json' )
    .then(createEmployeesList);
