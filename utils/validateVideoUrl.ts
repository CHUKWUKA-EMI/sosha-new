export const validateVideoUrl = (
  videoUrl: string
): { isValid: boolean; url: string } => {
  if (
    (!videoUrl.startsWith("https://www.youtube.com") &&
      !videoUrl.startsWith("https://youtu.be")) ||
    videoUrl.split("/").length !== 4
  ) {
    return {
      isValid: false,
      url: "",
    };
  } else {
    const videoId = videoUrl.split("/")[3];
    const url = `https://www.youtube.com/embed/${videoId}`;
    return {
      isValid: true,
      url,
    };
  }
};
