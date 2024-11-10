import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Checkbox from "@mui/material/Checkbox";
import imageCompression from "browser-image-compression";
import ReactPhoneInput from "react-phone-input-2";
import { NavLink } from "react-router-dom";
import axios from "axios";
import style from "./index.module.css";
import "react-phone-input-2/lib/style.css";
export default function ContactPost() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      sername: "",
      phone: "",
      birthdayplace: "",
      maritalStatus: "",
      //   agreeToPrivacy: false,
      //   note: "",
    },

    // functions will be used to validate values at corresponding key
    // validate: {
    //   full_name: (value) =>
    //     value.length < 2 ? "Name must have at least 2 letters" : null,

    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    //   agreeToPrivacy: (value) =>
    //     value ? null : "You must agree to the Privacy Policy",

    //   phone_number: (value) => (value ? null : "Phone number is required !"),
    // },
  });
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change
  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Compress the image
        const options = {
          maxSizeMB: 0.5, // Maximum file size in MB
          maxWidthOrHeight: 800, // Max width/height
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);

        // Convert compressed image to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing the image:", error);
      }
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleSubmit = async (values) => {
    axios
      .post("http://localhost:3003/contact", values)
      .then((el) => console.log(el, "el"));
    console.log(values, "values");
  };
  return (
    <div>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className={style.formContainer}
      >
        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"Name"}
          variant="outlined"
          fullWidth
          required
          // sx={}
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"Sername"}
          variant="outlined"
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent", // Remove focus outline
              },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Optionally set a hover color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1599A2", // Change color when focused
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              color: "#1599A2", // Change color when label is shrunk (when input has a value)
            },
          }}
          key={form.key("sername")}
          {...form.getInputProps("sername")}
        />

        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"birtdayPlace"}
          variant="outlined"
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent", // Remove focus outline
              },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Optionally set a hover color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1599A2", // Change color when focused
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              color: "#1599A2", // Change color when label is shrunk (when input has a value)
            },
          }}
          key={form.key("birthdayplace")}
          {...form.getInputProps("birthdayplace")}
        />

        <ReactPhoneInput
          // inputExtraProps={{
          //   name: "phone_number",
          //   required: true,
          //   autoFocus: true,
          // }}
          className={style.textInput}
          country={"us"}
          key={form.key("phone")}
          {...form.getInputProps("phone")}
        />
        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"maritalStatus"}
          variant="outlined"
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent", // Remove focus outline
              },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Optionally set a hover color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1599A2", // Change color when focused
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              color: "#1599A2", // Change color when label is shrunk (when input has a value)
            },
          }}
          key={form.key("maritalStatus")}
          {...form.getInputProps("maritalStatus")}
        />

        <Button type="submit" variant="contained" className={style.btn}>
          Add Product
        </Button>
      </form>
    </div>
  );
}
