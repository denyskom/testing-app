const appHost = "";
const serverHost = "/api";

const routes = {
    serverPeople:`${serverHost}/people`,
    serverTasks:`${serverHost}/tasks`,
    serverActivities:`${serverHost}/activities`,
    serverActivity:`${serverHost}/activity`,
    serverParticipate:`${serverHost}/participate`,
    serverLogin: `${serverHost}/login`,
    serverRegistration: `${serverHost}/register`,
    serverStages: `${serverHost}/stages`,

    appProfileRelative:'home/profile',
    appProfile:`${appHost}/home/profile`,

    appActivitiesRelative:'home/activities',
    appActivities:`${appHost}/home/activities`,

    appIndexRelative:`index`,
    appHomeRelative:`home`,
    appLogoutRelative:`index/logout`,
    appLoginRelative:`index/login`,
    appLogin:'login',
    appRegistrationRelative:`index/registration`,

};

export default routes;
