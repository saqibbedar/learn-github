// handle navbar and search bar

let navbarHolder = `
<h1
        class="text-xl media-5:text-3xl media-9:text-6xl font-semibold"
      >
        GitHub: Learn what matters 🚀
      </h1>
      <div class="h-5 w-5 media-7:h-7 media-7:w-7 cursor-pointer mt-1" onclick="handleSearch()"><img src="./assets/search.svg" alt="search icon"></div>   `;

let searchbarHolder = `
<div class="flex items-center w-full relative overflow-hidden">
    <input type="text" onchange="handleChange(event)" class="w-full outline-none text-black text-2xl px-5 py-3 media-5:py-5 rounded" placeholder="search i.e. git commands">
    <span class="h-full w-8 media-5:w-12 rounded flex items-center bg-white absolute right-0 cursor-pointer" onclick="removeSearchBar()">
        <img src="./assets/close.svg" class="h-5 w-5 media-5:h-7 media-5:w-7" alt="close-search">
    </span>
</div>`;

let nav = document.getElementById("navbar");

function handleSearch() {
  nav.innerHTML = searchbarHolder;
}

function removeSearchBar() {
  nav.innerHTML = navbarHolder;
}

// search logic

const handleChange = (event) => {
  console.log(event.target.value);
};

// Handle icons

let homeDiv = document.getElementById("home-icons");
let footerDiv = document.getElementById("footer-icons");

const icons = [
  {
    link: "https://x.com/saqibbedar",
    title: "X",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg>`,
  },
  {
    link: "https://www.linkedin.com/in/saqibbedar",
    title: "LinkedIn",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
  },
  {
    link: "https://www.instagram.com/saqibbedar/",
    title: "Instagram",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>`,
  },
  {
    link: "https://github.com/saqibbedar",
    title: "GitHub",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>`,
  },
];

let clutter = '';
icons.map(({link, title, icon}) => {
    clutter += `<a href='${link}' class="h-7 w-7 media-5:h-9 media-5:w-9" title='${title}'> ${icon} </a>`;
  homeDiv.innerHTML = clutter;
  footerDiv.innerHTML = clutter;
});


// handle event status

const countdownElement = document.getElementById("event-countdown");

function handleCountdown() {
  const eventDate = new Date("2024-09-21T21:00:00");
  const now = new Date();
  const timeDifference = eventDate - now;

  if (timeDifference > 0) {
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    countdownElement.textContent = `${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds} left`;
  } else if (timeDifference > -3600000) {
    countdownElement.textContent = "Event is ongoing!";
  } else {
    countdownElement.textContent = "Event has ended!";
    clearInterval(countdownInterval);
  }
}

const countdownInterval = setInterval(handleCountdown, 1000);

// Git commands UI

const UI = (keyword, text1, flag, text2, string, comment) => {
  return `
  <div class="mt-1">
      <span class="keyword">${keyword || ""}</span>
      <span class="g-text">${text1 || ""}</span>
      <span class="flag">${flag || ""}</span>
      <span class="g-text">${text2 || ""}</span>
      <span class="string">${string || ""}</span>
      <span class="comment">${comment || ""}</span>
  </div>
    `;
}

// Git config commands

const gitConfigCommands = [
  {
    keyword: "git",
    text1: "config",
    flag: "--global",
    text2: "user.name",
    string: "Your name",
    comment: "// Set the name for commits.",
  },
  {
    keyword: "git",
    text1: "config",
    flag: "--global",
    text2: "user.email",
    string: "you@example.com",
    comment: "// Set the email for commits.",
  },
];

// Update gitConfig UI

let gitConfigClutter = '';
let configCommandElement = document.getElementById("config-commands");

gitConfigCommands.map(({keyword, text1, flag, text2, string, comment }) => {
  gitConfigClutter += UI(keyword, text1, flag, text2, `"${string}"`, comment);
  configCommandElement.innerHTML = gitConfigClutter;
})

const repoCreationCommands = [
  {
    keyword: "git",
    text1: "init",
    flag: "",
    text2: "",
    string: "",
    comment: "// Initialize a new Git repository.",
  },
  {
    keyword: "git",
    text1: "clone",
    flag: "",
    text2: "",
    string: '"repository url"',
    comment: "// clone an existing repository.",
  },
];


// Repository creation

let repoCreationClutter = '';
let repoCreationElement = document.getElementById("repo-creation");

repoCreationCommands.map(({keyword, text1, flag, text2, string, comment  }) => {
  repoCreationClutter += UI(keyword, text1, flag, text2, `${string}`, comment);
  repoCreationElement.innerHTML = repoCreationClutter;
})

// Basic Commands

const basicCommands = [
  {
    keyword: "git",
    text1: "add",
    flag: "",
    text2: "",
    string: "'filename'",
    comment: "// Stage changes for the next commit.",
  },
  {
    keyword: "git",
    text1: "commit",
    flag: "-m",
    text2: "",
    string: '"message"',
    comment: "// Commit staged changes with a message.",
  },
  {
    keyword: "git",
    text1: "status",
    flag: "",
    text2: "",
    string: "",
    comment: "// Show the status of changes.",
  },
];

let basicCommandsClutter = '';
let basicCommandElement = document.getElementById("basic-commands");

basicCommands.map(({keyword, text1, flag, text2, string, comment  }) => {
  basicCommandsClutter += UI(keyword, text1, flag, text2, string, comment);
  basicCommandElement.innerHTML = basicCommandsClutter;
})

// git branches

const branchCommands = [
  {
    keyword: "git",
    text1: "branch",
    flag: "",
    text2: "",
    string: "",
    comment: "// List branches.",
  },
  {
    keyword: "git",
    text1: "branch",
    flag: "",
    text2: "",
    string: '"branch-name"',
    comment: "// Create a new branch.",
  },
  {
    keyword: "git",
    text1: "checkout",
    flag: "",
    text2: "",
    string: '"branch-name"',
    comment: "// Switch to a branch.",
  },
  {
    keyword: "git",
    text1: "merge",
    flag: "",
    text2: "",
    string: '"branch-name"',
    comment: "// Merge a branch into the current branch.",
  },
];

let branchCommandsClutter = "";
let branchElement = document.getElementById("git-branch");

branchCommands.map(({keyword, text1, flag, text2, string, comment }) => {
  branchCommandsClutter += UI(keyword, text1, flag, text2, string, comment);
  branchElement.innerHTML = branchCommandsClutter;
});


// Remote repositories

const remoteRepoCommands = [
  {
    keyword: "git",
    text1: "remote",
    flag: "",
    text2: "",
    string: "",
    comment: "// Show remote connections.",
  },
  {
    keyword: "git",
    text1: "remote",
    flag: "",
    text2: "add &ltname&gt",
    string: '"url"',
    comment: "// Add a remote repository.",
  },
  {
    keyword: "git",
    text1: "fetch &ltremote&gt",
    flag: "",
    text2: "",
    string: "",
    comment: "// Fetch changes from a remote repository.",
  },
  {
    keyword: "git",
    text1: "pull",
    flag: "",
    text2: "&ltremote&gt &ltbranch&gt",
    string: "",
    comment: "// Fetch and merge changes from a remote branch.",
  },
  {
    keyword: "git",
    text1: "push",
    flag: "",
    text2: "&ltremote&gt &ltbranch&gt",
    string: "",
    comment: "// Push local changes to a remote branch.",
  },
];

let remoteRepoClutter = "";
let remoteRepoElem = document.getElementById("git-remote");

remoteRepoCommands.map(({keyword, text1, flag, text2, string, comment }) => {
  remoteRepoClutter += UI(keyword, text1, flag, text2, string, comment);
  remoteRepoElem.innerHTML = remoteRepoClutter;
});

// Remote repositories

const gitUndoCommands = [
  {
    keyword: "git",
    text1: "reset &ltfile&gt",
    flag: "",
    text2: "",
    string: "",
    comment: "// Show remote connections.",
  },
  {
    keyword: "git",
    text1: "checkout",
    flag: "--",
    text2: "&ltfile&gt",
    string: "",
    comment: "// Discard changes in working directory.",
  },
  {
    keyword: "git",
    text1: "git revert",
    flag: "",
    text2: "&ltcommit&gt",
    string: "",
    comment: "// Create a new commit that undoes changes from a previous commit.",
  },
];

let gitUndoCommandsClutter = "";
let gitUndoCommandsElement = document.getElementById("git-undo-changes");

gitUndoCommands.map(({keyword, text1, flag, text2, string, comment }) => {
  gitUndoCommandsClutter += UI(keyword, text1, flag, text2, string, comment);
  gitUndoCommandsElement.innerHTML = gitUndoCommandsClutter;
});


// Handle copy
const copiedIcon = `<img src="./assets/copied.svg" class="w-6 h-6" alt="copied">`;
const copyIcon = `<img src="./assets/copy.svg" class="w-6 h-6" alt="copy">`;

function copyText(btn, elem) {
  let copyElement = document.getElementById(btn);

  let selectedElement = document.getElementById(elem);

  let textToCopy = selectedElement.innerText || selectedElement.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyElement.innerHTML = copiedIcon;
      setTimeout(() => {
        copyElement.innerHTML = copyIcon;
      }, 2000);
    })
    .catch((error) => alert("Failed to copy: " + error));
}