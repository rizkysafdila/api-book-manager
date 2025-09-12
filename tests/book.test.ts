import request from "supertest"
import app from "../src/main"

describe("Book API", () => {
  let bookId: number

  it("should create a new book", async () => {
    const res = await request(app).post("/api/books").send({
      title: "Clean Architecture",
      author: "Robert C. Martin",
      year: 2017,
    })

    expect(res.status).toBe(201)
    expect(res.body.success).toBe(true)
    expect(res.body.data).toHaveProperty("id")
    bookId = res.body.data.id
  })

  it("should fetch all books", async () => {
    const res = await request(app).get("/api/books")

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it("should fetch book by id", async () => {
    const res = await request(app).get(`/api/books/${bookId}`)

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data).toHaveProperty("id", bookId)
  })

  it("should update a book", async () => {
    const res = await request(app).put(`/api/books/${bookId}`).send({ title: "Clean Code Revised" })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.title).toBe("Clean Code Revised")
  })

  it("should delete a book", async () => {
    const res = await request(app).delete(`/api/books/${bookId}`)

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.message).toBe("Book deleted successfully")
  })
})
