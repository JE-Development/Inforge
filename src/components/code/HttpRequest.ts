import axios from 'axios'


export class HttpRequest{
    async httpRequest(url: string): Promise<any>{

        let ok = true;

        let json;

        await axios.get(url)
            .then((response: any) => {
                json = response.data;
            })
            .catch((error: any) => {
                console.log(error)
            });
        if(ok) {
            return json;
        }else{
            return "error";
        }

    }

    async httpRequestHeader(url: string, header: any): Promise<any>{

        let ok = true;

        let json;

        await axios.get(url, {headers: header})
            .then((response: any) => {
                json = response.data;
            })
            .catch((error: any) => {
                console.log(error)
            });
        if(ok) {
            return json;
        }else{
            return "error";
        }

    }

    async httpRequestPost(url: string, body: any): Promise<any>{

        let ok = true;

        let json;

        await axios.post(url, body)
            .then((response: any) => {
                json = response.data;
            })
            .catch((error: any) => {
                console.log(error)
            });
        if(ok) {
            return json;
        }else{
            return "error";
        }

    }
}