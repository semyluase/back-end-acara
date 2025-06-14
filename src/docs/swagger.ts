import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API ACARA",
    description: "Dokumentasi API ACARA",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-acara-red-pi.vercel.app/api",
      description: "Production Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "semydelavega",
        password: "D3l4v3g4",
      },
      RegistrationRequest: {
        fullName: "Semy Luase",
        username: "semy2025",
        email: "semy2025@yopmail.com",
        password: "1234512345",
        confirmPassword: "1234512345",
      },
      ActivationRequest: {
        code: "abcdefg",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endPointFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endPointFiles, doc);
