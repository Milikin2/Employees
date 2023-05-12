import './app-info.css';

function AppInfo({ increaceCount, employeesCount }) {
    return (
        <div className="app-info">
            <h1 className="app-info__title">Учет сотрудников в компании N</h1>
            <h2 className="app-info__subtitle">Общее число сотрудников: {employeesCount}</h2>
            <h2 className="app-info__bonus">Премию получат: {increaceCount}</h2>
        </div>
    );
}

export default AppInfo;