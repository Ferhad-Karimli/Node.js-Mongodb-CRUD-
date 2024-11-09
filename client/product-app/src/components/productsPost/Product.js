import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Checkbox from "@mui/material/Checkbox";
import imageCompression from "browser-image-compression";
import { NavLink } from "react-router-dom";
import axios from "axios";
import style from "./index.module.css";
export default function Product() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      price: "",
      description: "",
      location: "",
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
    values.image = selectedImage;
    axios
      .post("http://localhost:3003/product", values)
      .then((el) => console.log(el, "el"));
    console.log(values, "values");
  };
  return (
    <>
      <ul>
        <NavLink to="/products">
          {" "}
          <li>Products</li>
        </NavLink>
        <NavLink to="/">
          <li>Add Product</li>
        </NavLink>
        <NavLink to="/contact-forum">
          <li>Add Contact</li>
        </NavLink>
        <NavLink to="/contact-list">
          <li>Contacts</li>
        </NavLink>
      </ul>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className={style.formContainer}
      >
        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"Title"}
          variant="outlined"
          fullWidth
          required
          // sx={}
          key={form.key("title")}
          {...form.getInputProps("title")}
        />
        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"Description"}
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
          key={form.key("description")}
          {...form.getInputProps("description")}
        />

        <TextField
          className={style.textInput}
          id="outlined-basic"
          label={"Location"}
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
          key={form.key("location")}
          {...form.getInputProps("location")}
        />
        <TextField
          className={style.textInput}
          id="outlined-number"
          label="Price"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          key={form.key("price")}
          {...form.getInputProps("price")}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ marginBottom: 2 }}
          className={style.textInput}
        >
          Upload Image
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageChange}
          />
        </Button>
        {selectedImage && (
          <Box>
            <Typography>Image Preview:</Typography>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "200px", height: "auto", marginTop: "10px" }}
            />
          </Box>
        )}

        <label>
          <Checkbox
            key={form.key("delivery")}
            {...form.getInputProps("delivery")}
          />
          Has Delivery
        </label>

        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </form>
    </>
  );
}
