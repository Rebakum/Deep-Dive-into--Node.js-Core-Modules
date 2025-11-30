const fs = require("fs");
const path = require("path");
const sourceDir = path.join(__dirname, "output", "mesy-files");
const organizedDir = path.join(__dirname, "output", "organized-files");
const categories = {
  images: [".png", ".jpg", ".jpeg", ".gif", ".bmp", "svg"],
  documents: [".txt", ".pdf", ".docx", ".xlsx", ".pptx"],
  code: [".js", ".html", ".css", ".java", ".py", ".cpp"],
  audio: [".mp3", ".wav", ".aac", ".flac", ".ogg"],
  videoes: [".mp4", ".mkv", ".avi", ".mov", ".wmv"],
  archives: [".zip", ".rar", ".tar", ".gz"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const textFiles = [
  "notes.txt",
  "todo.txt",
  "readme.md",
  "summary.txt",
  "report.pdf",
  "data.csv",
  "script.js",
  "image.png",
  "photo.jpg",
  "archive.zip",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "backup.tar.gz",
  "software.exe",
  "song.wav",
  "randomfile.bin",
  "vacation.jpeg",
  "document.docx",
  "spreadsheet.xlsx",
  "nodejs.zip",
];
function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    textFiles.forEach((file) => {
      fs.writeFileSync(
        path.join(sourceDir, file),
        `Sample content for ${file}`
      );
    });
  }
  console.log("Mesy directories files are created");
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
    console.log("Organized files directory created");
  }
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}

function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase();
  for (const [category, extentions] of Object.entries(categories)) {
    if (extentions.includes(ext)) {
      return category;
    }
  }
  return "others";
}
function organizedFiles() {
  console.log("file organizer \n ");
  console.log("source:", sourceDir);
  console.log("Destrination: ", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");

  const files = fs.readdirSync(sourceDir);
  if (files.length === 0) {
    console.log("No files to work on");
    return;
  }
  console.log(`found ${files.length} files to organize \n`);
  const stats = {
    total: 0,
    byCategory: {},
  };
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}
function showHelp() {
  console.log(`
        file organizer - usage:
        commands: 
        init - create files
        organize - organize files into categores

        example: file-organizer init
        node file-organizer organize
        
        
        `);
}
const command = process.argv[2];
switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizedFiles();
    break;
  default:
    showHelp();
    break;
}

// initializeDirectories();
