import axios from 'axios';
export class Api 
{
    public constructor( input: { 
        path: string, 
        method: "get"|"post",
        body?:any,
        header?: any,
    }){
        this.path = input.path;
        this.method = input.method;
    }
    private _uri: string= "http://192.168.168.126";
    private _path: string ="";
    private _method: "get"|"post" = "get";
    private _body?: any;
    private _header?: any;
    public get url():string
    {
        return this._uri
    }
    public set path(path : string)
    {
        this._path = path;
    }
    public get path():string
    {
        return this._path;
    }

    public set method( method: "get"|"post")
    {
        this._method = method;
    }
    public get method()
    {
        return this._method;
    }

    public set body(body: any)
    {
        this._body = body;
    }
    public get body()
    {
        return this._body;
    }
    public get header()
    {
        return this._header;
    }
    public set header(header: any)
    {
        this._header = header;
    }

    async call()
    {
        return new Promise((resolve,reject)=>
        {
            axios({
                method: this.method,
                url: this.url+this.path,
                headers: this.header,
                data: this.body,
              }).then((data)=> {
                resolve(data.data);
              })
              .catch((data)=>{
                const code = data.response.status;
                if(code == 404)
                {
                    console.log("404",data);
                } else{
                    reject(data)
                }     
                
            
            });
        });
    }

}