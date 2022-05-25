import blobToBase64 from "../blobToBase64";

describe("blobToBase64", () => {
  it("should make a base64 string from a blob", async () => {
    const blob = new Blob([JSON.stringify({ test: "data" }, null, 2)], {
      type: "application/json",
    });
    await expect(blobToBase64(blob)).resolves.toBe(
      "data:application/json;base64,ewogICJ0ZXN0IjogImRhdGEiCn0="
    );
  });

  it("should throw an error", async () => {
    await expect(
      blobToBase64(JSON.stringify({ test: "data" }, null, 2))
    ).rejects.toHaveProperty(
      "message",
      "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'."
    );
  });
});
