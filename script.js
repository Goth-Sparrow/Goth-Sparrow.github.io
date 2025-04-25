document.addEventListener("DOMContentLoaded", () => {
    const resourceList = document.getElementById("resourceList");
    const searchInput = document.getElementById("searchInput");
  
    // 加载资源数据
    fetch("resources.json")
      .then((response) => response.json())
      .then((resources) => {
        renderResources(resources);
  
        // 搜索功能
        searchInput.addEventListener("input", () => {
          const searchTerm = searchInput.value.toLowerCase();
          const filteredResources = resources.filter((resource) =>
            resource.name.toLowerCase().includes(searchTerm)
          );
          renderResources(filteredResources);
        });
      })
      .catch((error) => console.error("加载资源失败:", error));
  
    // 渲染资源列表
    function renderResources(resources) {
      resourceList.innerHTML = "";
      resources.forEach((resource) => {
        const item = document.createElement("div");
        item.classList.add("resource-item");
  
        item.innerHTML = `
          <img src="${resource.image}" alt="${resource.name}">
          <a href="${resource.link}" target="_blank">${resource.name}</a>
        `;
  
        resourceList.appendChild(item);
      });
    }
  });