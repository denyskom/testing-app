import jwt_decode from 'jwt-decode';


const decodeCurrentUser = () => {
    return jwt_decode(localStorage.jwtToken);
};

export default decodeCurrentUser;
