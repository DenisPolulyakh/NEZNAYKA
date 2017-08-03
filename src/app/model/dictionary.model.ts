export interface IDictionaryList {
  id:number;
  tags:any;
  value:string;
  isEdit:boolean;
  isNew:boolean;
  tagsAsStringArray:string[];
}

export class DictionaryList {

  private _id:number;
  private _tags:any;
  private _tagsAsStringArray:string[];
  private _value:string;
  private _isEdit:boolean;
  private _isNew:boolean;

  constructor(dto?:any) {
    if (dto) this.deserialize(dto);
  }

  getTags():any {
    return this._tags.map(i => ({'id':i.id, 'tag': i.tag}))

  }

  setTags(value:any) {
    value
      ? this._tags = value.map(i => ({'id': i.id, 'tag': i.tag}))
      : []
  }

  getTagsAsStringArray():any {
    return this._tagsAsStringArray;
  }

  setTagsAsStringArray(value:any) {
    value
    ? this._tagsAsStringArray = value.map((i)=>(i.tag))
    : [];
  }

  getMessage():string {
    return this._value;
  }

  setMessage(value:string) {
    this._value = value;
  }

  getId():any {
    return this._id;
  }

  setId(value:any) {
    this._id = value;
  }

  getIsEdit():boolean {
    return this._isEdit;
  }

  setIsEdit(value:boolean) {
    this._isEdit = value;
  }


  getIsNew():boolean {
    return this._isNew;
  }

  setIsNew(value:boolean) {
    this._isNew = value;
  }

  public deserialize(data:any):DictionaryList {
    this.setTags(data.tags);
    this.setMessage(data.value);
    this.setId(data.id);
    this.setIsEdit(data.isEdit ? true : false);
    this.setIsNew(data.isNew ? true : false);
    this.setTagsAsStringArray(data.tags);

    return this;
  }
}
