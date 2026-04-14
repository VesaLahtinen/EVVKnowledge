document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector("#postBtn");
  const input = document.querySelector("#postInput");
  const feed = document.querySelector("#feed");

  btn?.addEventListener("click", () => {
    if (!input.value) return;

    const div = document.createElement("div");
    div.textContent = "Anonymous: " + input.value;
    

    feed?.appendChild(div);
    input.value = "";
  });

});