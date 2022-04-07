import { Request, Response, query } from "express";

import pool from "../database";

class AlumnoController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from alumno",
        function (error: Error, rows: any) {
          res.send(rows);
        }
      );
    });
  }

  public async getAlumnoById(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from alumno where id = " + req.params.id,
        function (error: Error, rows: any) {
          res.send(rows);
        }
      );
    });
  }

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
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
      let result = r.query(sql, function (error: Error, rows: any) {
        console.log(sql);

        res.json({ message: "alumno creado" });
      });
    });
  }

  public async delete(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlDelete = `DELETE FROM alumno WHERE id = '${req.params.id}'`;
      console.log(sqlDelete);
      let result = r.query(sqlDelete, function (error: Error, rows: any) {
        res.json({ message: "alumno borrado" });
      });
    });
  }

  // public async update(req: Request, res: Response) {
  //   await pool.then((r) => {
  //     var sqlUpdate = `UPDATE  products  SET name = '${req.body.name}', category = '${req.body.category}', description = '${req.body.description}', price = ${req.body.price} WHERE id = '${req.params.id}'`;
  //     console.log(sqlUpdate);

  //     let result = r.query(sqlUpdate, function (error: Error, rows: any) {
  //       res.json({ message: "juego actualizado" });
  //     });
  //   });
  // }
}

export const alumnoController = new AlumnoController();
export default alumnoController;
