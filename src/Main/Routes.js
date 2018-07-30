const appHost = "";
const serverHost = "/api";

const routes = {
    serverPeople:`${serverHost}/people`,
    serverTasks:`${serverHost}/tasks`,
    serverActivities:`${serverHost}/activities`,
    serverParticipate:`${serverHost}/participate`,
    serverLogin: `${serverHost}/login`,
    serverRegistration: `${serverHost}/register`,
    serverStages: `${serverHost}/stages`,

    appPeopleRelative:'home/people',
    appPeople:`${appHost}/home/people`,

    appActivitiesRelative:'home/activities',
    appActivities:`${appHost}/home/activities`,

    appIndexRelative:`index`,
    appHomeRelative:`home`,
    appLogoutRelative:`index/logout`,
    appLoginRelative:`index/login`,
    appRegistrationRelative:`index/registration`,


};


module.exports = routes;