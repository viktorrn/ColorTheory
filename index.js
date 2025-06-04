import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const filePath = "./sourceOfLies.json"

const makeCommits = (n) => {
    if(n===0) return simpleGit().push();

    const x = Math.floor(Math.random()*53);
    const y = 2 + Math.floor(Math.random()*3);

    const date = moment().subtract(1 , 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = {
        date: date,
    };

    jsonfile.writeFile(filePath, data,()=>{
        simpleGit().add([filePath]).commit(date, {'--date': date}, makeCommits.bind(this,--n));
    });
}

makeCommits(100);
