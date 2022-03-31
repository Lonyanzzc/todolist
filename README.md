# todolist : taro+vantui+vue3

这是一个测试的todolist项目，囊括的技术包括：
    前端：taro、vue3、vantui、axios、typescript
    后端：express、nodejs、typeorm，mysql

## 项目前端安装依赖
```
1. npm install
2. npm install -g @tarojs/cli

如果出现sass错误,则继续安装：3. npm install -g mirror-config-china
```

### 启动各种端的项目
```
npm run dev:h5
npm run dev:tt
npm run dev:rn
npm run dev:qq
npm run dev:swan
npm run dev:weapp
npm run dev:alipay
npm run dev:quickapp
```

### 打包各种端
```
npm run build:h5
npm run build:tt
npm run build:rn
npm run build:qq
npm run build:swan
npm run build:weapp
npm run build:alipay
npm run build:quickapp
```

###------------------------------

### 启动服务器步骤（service文件夹）：

## 后端安装依赖
```
npm install
```

## 打开mysql数据库
```
打开sql安装位置
    如：cd c:\Program Files\MySQL\MySQL Server 8.0\bin
连接sql：
    mysql -u root -p

```

### 启动express
```
npm start
```