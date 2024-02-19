import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  jest
} from "@jest/globals";
import request from "supertest";
import { server, listen, close } from "../src/server";

beforeAll(async () => {
  await listen();
});

afterAll(async () => {
  await close();
});

let response: request.Response;

describe("HTTP reporting API", () => {
  describe("GET /", () => {
    beforeEach(async () => {
      response = await request(server).get("/");
    });

    it("responds with a 200", async () => {
      expect(response.status).toEqual(200);
    });

    it("responds with OK", async () => {
      expect(response.text).toEqual("OK");
    });
  });

  describe("POST /report/csp", () => {
    const cspReport = { name: "John" };
    let mockLog: any;

    beforeEach(async () => {
      mockLog = jest.spyOn(console, "log");
      response = await request(server).post("/report/csp").send(cspReport);
    });

    it("responds with a 204", async () => {
      expect(response.status).toEqual(204);
    });

    it("sends the report to STDOUT", async () => {
      expect(mockLog).toHaveBeenCalledWith(cspReport);
    });
  });
});
