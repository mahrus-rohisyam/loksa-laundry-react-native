export interface RegisterResponse {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  userRole: string;
  address: {
    longitude: string;
    latitude: string;
  };
  name: {
    firstName: string;
    lastName: string;
  };
  adress: {
    rt: string;
    rw: string;
    city: string;
    province: string;
    zipcode: string;
    adressDetail: string;
    coordinates: {
      longitude: string;
      latitude: string;
    };
  };
}
