const connection=require('./Connection');

async function main(){
    await connection();
    console.log('----Application started------');
}
main();