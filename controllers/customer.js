try {
    const Operations = require('../operations/customer');
    const Response = require('../services/response');

    exports.read_all = async (req, res, next) => {
        try {

            let response = await Operations.fetch_all();

            res.status(response.code).send(response);

        }
        catch (error) {

            res.status(Response.internal_server_error.code).send(Response.internal_server_error)

        }
    }

    exports.read = async (req, res, next) => {
        try {

            let { id } = req.params;

            let response = await Operations.fetch(id);

            res.status(response.code).send(response);

        }
        catch (error) {

            res.status(Response.internal_server_error.code).send(Response.internal_server_error)

        }
    }

    exports.update = async (req, res, next) => {
        try {

            let { name, contact, service_id, start_date, end_date } = req.body;

            let { id } = req.params;

            let response = await Operations.update(name, contact, service_id, start_date, end_date, id);

            res.status(response.code).send(response);

        }
        catch (error) {

            res.status(Response.internal_server_error.code).send(Response.internal_server_error)

        }
    }

    exports.create = async (req, res, next) => {
        try {

            let { name, contact, service_id, start_date, end_date } = req.body;

            let response = await Operations.create(name, contact, service_id, start_date, end_date);

            res.status(response.code).send(response);

        }
        catch (error) {

            res.status(Response.internal_server_error.code).send(Response.internal_server_error)

        }
    }

    exports.delete = async (req, res, next) => {
        try {

            let { id } = req.params;

            let response = await Operations.delete(id);

            res.status(response.code).send(response);

        }
        catch (error) {

            res.status(Response.internal_server_error.code).send(Response.internal_server_error)

        }
    }

} catch (e) {
    console.log(e)
}