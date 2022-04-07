"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumnoController = void 0;
const database_1 = __importDefault(require("../database"));
class AlumnoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from alumno", function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    getAlumnoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from alumno where id = " + req.params.id, function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sql = `INSERT INTO alumno
      SET
      nombre = '${req.body.nombre}',
      apellidos = '${req.body.apellidos}',
      fecha_nacimiento = '${req.body.fecha_nacimiento}',
      sexo = '${req.body.sexo}',
      direccion = '${req.body.direccion}',
      telefono = '${req.body.telefono}',
      email = '${req.body.email}',
      password = '${req.body.password}',
      personal_web = '${req.body.personal_web}',
      personal_github = '${req.body.personal_github}',
      personal_twitter = '${req.body.personal_twitter}',
      personal_instagram = '${req.body.personal_instagram}',
      personal_facebook = '${req.body.personal_facebook}'
      `;
                let result = r.query(sql, function (error, rows) {
                    console.log(sql);
                    res.json({ message: "alumno creado" });
                });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlDelete = `DELETE FROM alumno WHERE id = '${req.params.id}'`;
                console.log(sqlDelete);
                let result = r.query(sqlDelete, function (error, rows) {
                    res.json({ message: "alumno borrado" });
                });
            });
        });
    }
}
exports.alumnoController = new AlumnoController();
exports.default = exports.alumnoController;
