const tablesService = require("./tables.service")
const knex = require("../db/connection");

function create(reservation) {
  return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((createdReservation) => createdReservation[0]);
}

function read(reservation_id) {
  return knex("reservations").select("*").where({ reservation_id }).first();
}

function updateStatus(updatedReservation) {
  return knex("reservations")
    .where({ reservation_id: updatedReservation.reservation_id })
    .whereNot({ status: "finished" })
    .update(updatedReservation, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function search(mobile_number) {
  return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

function listByDate(date) {
  return knex("reservations")
    .where({ reservation_date: date })
    .whereNot({ status: "finished" })
    .orderBy("reservation_time");
}

async function list(req, res, next) {
  const data = await tablesService.list();
  res.status(200).json({ data });
}

async function destroy(req, res, next) {
  const updatedTable = {
    ...res.locals.table,
    reservation_id: null,
  };
}

module.exports = {
  create,
  read,
  updateStatus,
  search,
  listByDate,
  list,
  delete: destroy,
};
