module.exports = async function (context, req) {
    context.log('salida en el log');
    context.res = {
        body: "texto tweet DG 07-06-2021"
    };
};
