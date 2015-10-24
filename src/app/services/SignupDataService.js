class SignupDataService {
   static getPackages(callback){

       callback([{
            code: "MINI",
            voice : "2 hours voice",
            data: "2 GB data",
            extra: "Spotify",
            price: "29 DKK"
        }, {
            code: "STANDARD",
            voice : "5 hours voice",
            data: "5 GB data",
            extra: "Spotify",
            price: "69 DKK"
        }, {
            code: "MEGA",
            voice : "Unlimited hours voice",
            data: "10 GB data",
            extra: "Spotify",
            price: "99 DKK"
        } ]);
    }
}
export default SignupDataService;

