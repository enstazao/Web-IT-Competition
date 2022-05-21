const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const { body, validationResult } = require("express-validator");
const { htmlToText } = require("html-to-text");
const fs = require("fs");
const Event = require("../models/EventModel");

module.exports.createEvent = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const { title, description, id, name, hobby, city, country, type, domain } =
      fields;
    const errors = [];

    if (title === "") {
      errors.push({ msg: "Title is Required" });
    }
    if (body === "") {
      errors.push({ msg: "Body is Required" });
    }
    if (description === "") {
      errors.push({ msg: "Description is Required" });
    }

    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Image is Required" });
    } else {
      const { mimetype } = files.image;
      const split = mimetype.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        errors.push({ msg: `${extension} is not a valid extension` });
      } else {
        files.image.newFilename = uuidv4() + "." + extension;
      }
    }
    if (errors.length != 0) {
      return res.status(400).json({ errors, files });
    } else {
      const newPath =
        __dirname + `/../client/build/images/${files.image.newFilename}`;
      fs.copyFile(files.image.filepath, newPath, async (error) => {
        if (!error) {
          try {
            const response = await Event.create({
              title,
              image: files.image.newFilename,
              description,
              userName: name,
              hobby,
              city,
              country,
              type,
              domain,
              userID: id,
            });
            return res
              .status(200)
              .json({ msg: "Post created successfully", response });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        }
      });
    }
  });
};
