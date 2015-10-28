class SignupDataService {
   static getPackages(callback){

       callback([{
            code: "mini",
            voice : "2 hours voice",
            data: "2 GB data",
            extra: "Spotify",
            price: "29 DKK"
        }, {
            code: "standard",
            voice : "5 hours voice",
            data: "5 GB data",
            extra: "Spotify",
            price: "69 DKK"
        }, {
            code: "mega",
            voice : "Unlimited hours voice",
            data: "10 GB data",
            extra: "Spotify",
            price: "99 DKK"
        } ]);
    }

    static getRandomPhoneNumbers(nr, callback) {
        callback(['61660020', '61660050', '61660034', '61662315', '61665873', '61663412', '61666715', '61666134', '61664567'])
    }

}
export default SignupDataService;

