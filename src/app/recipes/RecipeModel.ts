export class Recipe{
    public Name ?:string;
    public Description ?:string;
    public ImgPath ?:string;
    constructor(name:string,des:string,imgpath:string){
    this.Name=name;
    this.Description=des;
    this.ImgPath=imgpath;
    }
}