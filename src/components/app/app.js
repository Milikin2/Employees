import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employess-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { employeeName: "John C.", employeeSalary: 800, increase: true, rise: true, id: 1 },
                { employeeName: "Alex M.", employeeSalary: 3000, increase: false, rise: false, id: 2 },
                { employeeName: "Carl G.", employeeSalary: 300, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: '',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id != id),
            }
        })
    }

    addEmployee = (employeeName, employeeSalary) => {
        const newItem = {
            employeeName,
            employeeSalary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        if (newItem.employeeName != '' && newItem.employeeSalary != '') {
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id == id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.employeeName.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.employeeSalary > 1000)
            default:
                return items
        }
    }

    onFIlterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const employees = this.state.data.length
        const increaceCount = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                    employeesCount={employees}
                    increaceCount={increaceCount} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFIlterSelect={this.onFIlterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm
                    onAdd={this.addEmployee} />
            </div>
        )
    }
}

export default App;