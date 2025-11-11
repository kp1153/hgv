import { useCallback, useState } from "react";
import { Stack, Button, Card, Text, Spinner } from "@sanity/ui";
import { set } from "sanity";

export default function CloudinaryPDFInput(props) {
  const { onChange, value } = props;
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      if (file.type !== "application/pdf") {
        setError("सिर्फ PDF फाइल अपलोड करें।");
        return;
      }

      setUploading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "saurabh");
        formData.append("folder", "sanity-pdfs");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/raw/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();
        onChange(set(data.secure_url));
      } catch (err) {
        setError("अपलोड विफल रहा। पुनः प्रयास करें।");
        console.error("Cloudinary PDF upload error:", err);
      } finally {
        setUploading(false);
        event.target.value = "";
      }
    },
    [onChange]
  );

  const pdfUrl = typeof value === "string" ? value : null;

  return (
    <Stack space={3}>
      <Button
        as="label"
        mode="ghost"
        text={uploading ? "अपलोड हो रहा है..." : "PDF चुनें"}
        tone="primary"
        disabled={uploading}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={uploading}
        />
      </Button>

      {uploading && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={2}>
            <Spinner />
            <Text size={1}>Cloudinary पर अपलोड हो रहा है...</Text>
          </Stack>
        </Card>
      )}

      {error && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>{error}</Text>
        </Card>
      )}

      {pdfUrl && (
        <Card padding={3} radius={2} shadow={1} tone="positive">
          <Stack space={2}>
            <Text size={1} weight="semibold">
              ✓ PDF अपलोड हो गया
            </Text>
            <Text size={1} muted style={{ wordBreak: "break-all" }}>
              {pdfUrl}
            </Text>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2276fc", textDecoration: "underline" }}
            >
              PDF देखें
            </a>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}
