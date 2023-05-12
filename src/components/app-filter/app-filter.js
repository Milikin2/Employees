import './app-filter.css'

function AppFilter(props) {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники', },
        { name: 'rise', label: 'На повышение', },
        { name: 'moreThen1000', label: 'По зарплате больше 1000$', },
    ];

    return (
        <div className="btn-group">
            {buttonsData.map(({ name, label }) => {
                const active = props.filter === name;
                const clazz = active ? 'btn-light' : 'btn-outline-light';

                return (<button onClick={() => props.onFIlterSelect(name)} className={`btn ${clazz}`} key={name} type="button">
                    {label}
                </button>)
            })}
        </div>
    );
}

export default AppFilter;
