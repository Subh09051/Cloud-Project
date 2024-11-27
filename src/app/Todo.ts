export class Todo{
    serial_no: number
    title: string
    desc: string
    active: boolean

    constructor(serial_no: number, title: string, desc: string, active: boolean) {
        this.serial_no = serial_no;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}