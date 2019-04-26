export class Util {

    static pad(num:Number): string {
        let s = num+"";
        while (s.length < 3) s = "0" + s;
        return s;
    }

    static todate():string{
        var today = new Date();
        var dd = today.getDate().toString();
        var mm = (today.getMonth() + 1).toString(); //January is 0!
    
        var yyyy = today.getFullYear();
        if (Number(dd) < 10) {
          dd.toString();
          dd = '0' + dd;
        }
        if (Number(mm) < 10) {
          mm = '0' + mm;
        }
        var todayString = mm + '-' + dd + '-' +yyyy;
        return todayString;
    }

}

