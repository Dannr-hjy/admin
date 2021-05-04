document.write(`
    <div class="mdui-dialog" id="login">
       
        <div class="mdui-p-a-2">
            <h1>注册</h1>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">A营用户名</label>
                <input class="mdui-textfield-input" type="text"/>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">A营ID</label>
                <input class="mdui-textfield-input" type="text"/>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">您的邮箱</label>
                <input class="mdui-textfield-input" type="email"/>
            </div>
            
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">设置密码</label>
                <input class="mdui-textfield-input" type="password"/>
            </div>
            <select class="mdui-select" mdui-select="{position: 'top'}">
                <option value="1">1组</option>
                <option value="2">2组</option>
                <option value="3">3组</option>
                <option value="4">4组</option>
                <option value="5">5组</option>
                <option value="6">6组</option>
                <option value="5">7组</option>
                <option value="6">8组</option>
            </select>
            <div style="font-size: 0;">
                <button class="mdui-btn mdui-color-theme-accent mdui-m-a-1" style="float:right">提交申请</button>
                <button class="mdui-btn mdui-color-white mdui-ripple mdui-m-a-1"  mdui-dialog-close mdui-dialog="{target: '#login2'}" style="float:right">已有账号？去登陆</button>
            </div>
            <br>
        </div>
    </div>
    <div class="mdui-dialog" id="login2">
        <div class="mdui-p-a-2">
            <h1>登录</h1>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">A营用户名</label>
            <input class="mdui-textfield-input" type="text"/>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">密码</label>
            <input class="mdui-textfield-input" type="password"/>
        </div>
        <div style="font-size: 0;">
            <button class="mdui-btn mdui-color-theme-accent mdui-m-a-1" style="float:right">登录</button>
            <button class="mdui-btn mdui-color-white mdui-ripple mdui-m-a-1"  mdui-dialog-close mdui-dialog="{target: '#login'}" style="float:right">去注册账号</button>
        </div>
        <br>
    </div>
`);