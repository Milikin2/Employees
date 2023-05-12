import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeSalary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.employeeName, this.state.employeeSalary)
        this.setState({
            employeeName: '',
            employeeSalary: '',
        })
    }

    render() {
        const { employeeName, employeeSalary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='employeeName'
                        value={employeeName}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='employeeSalary'
                        value={employeeSalary}
                        onChange={this.onValueChange} />

                    <button onClick={this.props.addEmployee} type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;