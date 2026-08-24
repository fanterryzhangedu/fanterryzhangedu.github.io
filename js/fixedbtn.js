    // 1. 创建按钮元素（无文字）
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    
    // 2. 设置按钮样式
    backToTopBtn.style.cssText = `
      position: fixed;
      right: 30px;
      bottom: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #E6F0FA;
      border: 1px solid rgba(0, 94, 167, 0.2);
      /* 先用内置SVG图标（无需外部PNG，确保能看到按钮） */
      background-image: url("/test/images/icon/back.png");
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      outline: none;
      box-shadow: 
        0 2px 6px rgba(0, 0, 0, 0.04),
        0 1px 4px rgba(0, 94, 167, 0.07);
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;
    `;

    // 鼠标悬浮样式
    backToTopBtn.addEventListener('mouseover', () => {
      backToTopBtn.style.backgroundColor = '#D4E4F5';
      backToTopBtn.style.transform = 'translateY(-2px)';
      backToTopBtn.style.boxShadow = 
        '0 4px 10px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 94, 167, 0.1)';
      backToTopBtn.style.borderColor = 'rgba(0, 94, 167, 0.3)';
    });

    backToTopBtn.addEventListener('mouseout', () => {
      backToTopBtn.style.backgroundColor = '#E6F0FA';
      backToTopBtn.style.transform = 'translateY(0)';
      backToTopBtn.style.boxShadow = 
        '0 2px 6px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 94, 167, 0.07)';
      backToTopBtn.style.borderColor = 'rgba(0, 94, 167, 0.2)';
    });

    // 3. 添加按钮到页面
    document.body.appendChild(backToTopBtn);

    // 4. 点击平滑回到顶部
    backToTopBtn.addEventListener('click', () => {
      // 使用history.back()实现返回上一页
      window.history.back();
      // 兼容备选方案：如果history.back()无效，用history.go(-1)
      // window.history.go(-1);
    });