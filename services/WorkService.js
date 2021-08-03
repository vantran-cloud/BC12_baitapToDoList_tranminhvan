export default class WorkService {
    fetchWork = () => {
        return axios ({
            url: 'http://localhost:3000/listtodo',
            method: 'GET',
        });
    };

    addWorks = (work) => {
        return axios ({
            url: 'http://localhost:3000/listtodo',
            method: 'POST',
            data: work,
        });
    };

    checkWorks = (work) => {
        return axios ({
            url: 'http://localhost:3000/listDone',
            method: 'POST',
            data: work,
        });
    };

    getOneWork = (id) => {
        return axios ({
            url: `http://localhost:3000/listtodo/${id}`,
            method: 'GET',
        });
    };

    getDoneWork = () => {
        return axios ({
            url: 'http://localhost:3000/listDone',
            method: 'GET',
        });
    };

    delWork = (id) => {
        return axios ({
            url: `http://localhost:3000/listtodo/${id}`,
            method: 'DELETE',
        });
    };

    sortAcs = () => {
        return axios ({
            url: 'http://localhost:3000/listtodo?_sort=work&_order=asc',
            method: 'GET',
        });
    };

    sortDesc = () => {
        return axios ({
            url: 'http://localhost:3000/listtodo?_sort=work&_order=desc',
            method: 'GET',
        });
    };

    delWorkDone = (id) => {
        return axios ({
            url: `http://localhost:3000/listDone/${id}`,
            method: 'DELETE',
        });
    };
};
