# 顾航 · Hang Gu

高校教师，前端工程背景。马来亚大学计算机科学硕士（数据科学）。

<p>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/profile-cover-dark.svg" />
  <img src="assets/profile-cover-light.svg" alt="Frontend engineering · Data quality · AI applications" width="1200" />
</picture>
</p>

**我主要做复杂业务系统的前端开发，关注工作流、数据质量和 AI 应用。** 在这里分享可运行的项目、实现取舍与学习复盘；研究兴趣是资源受限条件下的可靠多模态学习。

**[个人网站](https://guhang2011.github.io/)** · **[在线演示](https://guhang2011.github.io/#demos)** · **[导师阅读入口](https://guhang2011.github.io/research/reviewer-guide.html)**

[简历](https://guhang2011.github.io/research/cv.html) · [项目目录](docs/project-index.md) · [邮件联系](mailto:guhang2011@126.com)

<sub>Lecturer at 江苏财经职业技术学院 · MSc, Universiti Malaya. English content is available in the portfolio and notebook.</sub>

## 01 / 代表项目

### MeteoFormer · 区域气象预测工作台

`Vue 3` `TypeScript` `FastAPI` `PyTorch`

以地图为主视图，探索 **5 类气象要素与 24 小时预报**。切换时效、点击网格查看单点曲线，下载 PNG / NetCDF；模型实验室展示实际训练日志与基线评估。

[打开 Demo](https://guhang2011.github.io/meteoformer-weather-system/) · [源码与本地运行](https://github.com/GuHang2011/meteoformer-weather-system) · [设计与实现范围](https://github.com/GuHang2011/meteoformer-weather-system/blob/main/guides/设计对照与改造记录.md)

<sub>在线版为合成数据与已完成实验的只读快照，非实时天气服务；完整系统可在本地导入数据、训练和推理。</sub>

<a href="https://guhang2011.github.io/meteoformer-weather-system/"><img src="https://raw.githubusercontent.com/GuHang2011/meteoformer-weather-system/main/assets/workspace-desktop.png" alt="MeteoFormer 气象预测工作台：深色地图、24 小时时效与单点预报；合成演示数据" width="900" /></a>

### 沭阳之家 · 多端社区系统

`Vue 3` `Element Plus` `uni-app` `Spring Boot`

将会员、活动、论坛、聊天和文件管理组织成一套多端业务系统。**v1.6.0 新增我的事项、站内通知和互助办结**；重点看聚合入口如何保持原业务权限，以及 Web、H5 与小程序之间的共享状态。

[源码与启动](https://github.com/GuHang2011/shuyang-home) · [项目介绍](https://guhang2011.github.io/cases/shuyang/) · [版本验收记录](https://github.com/GuHang2011/shuyang-home/blob/main/docs/验收记录.md)

<sub>本地可运行的试点版本；小程序编译与真机验收分别记录，尚未正式发布。</sub>

<details>
<summary>查看工作台截图</summary>

<a href="https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots"><img src="https://raw.githubusercontent.com/GuHang2011/shuyang-home/main/docs/screenshots/element-workspace-desktop.png" alt="沭阳之家 Element Plus 工作台，展示业务分类和管理入口；隔离测试数据" width="800" /></a>

截图来自隔离测试环境。[完整图集](https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots)。

</details>

### React 工作流 · 审核与异常恢复

`React` `TypeScript` `Ant Design`

把审批过程拆成明确的状态转换，处理**网络重试、版本冲突与重置后的旧请求**。打开演示，先模拟提交失败，再试一次刷新后重新确认。

[打开 Demo](https://guhang2011.github.io/demos/react-workflow/) · [实现与运行说明](https://github.com/GuHang2011/GuHang2011.github.io/tree/main/demos/react-workflow) · [设计复盘](https://guhang2011.github.io/notebook/workflow-recovery-review.html)

<sub>AI 辅助实现的独立学习项目，使用合成任务和模拟接口。</sub>

<details>
<summary>查看交互界面</summary>

<a href="https://guhang2011.github.io/demos/react-workflow/"><img src="https://guhang2011.github.io/assets/demo-gallery/react-workflow.webp" alt="React 与 Ant Design 工作流演示，包含审核任务和异常恢复操作" width="800" /></a>

</details>

### 禾镜 FieldLens · 图像检测工作台

`JavaScript` `Vite` `Flask` `YOLO 接口`

把图片、检测框、置信度和复核记录放在同一个工作台。**v1.3.1 改进详情分区、草稿保留与手机记录卡片**；支持逐区域复核、报告打印、备份冲突检查和可选 AI 接口。[界面改进说明](https://guhang2011.github.io/cases/fieldlens/#ui-refinement)。

[打开 Demo](https://guhang2011.github.io/fieldlens/) · [源码与本地接入](https://github.com/GuHang2011/fieldlens) · [验证范围](https://github.com/GuHang2011/fieldlens/blob/main/docs/VALIDATION.md)

<sub>在线版为合成插画与预设标注，不执行真实推理；本地可接入有授权的 YOLO 检测权重。</sub>

<details>
<summary>查看检测工作台</summary>

<a href="https://guhang2011.github.io/fieldlens/"><img src="https://raw.githubusercontent.com/GuHang2011/fieldlens/main/docs/workspace.png" alt="禾镜图像检测工作台，展示示例图片、参数和结果区域" width="800" /></a>

</details>

### 文件盘点工具 · 可复现的小型工程

`Python` `CLI` `unittest` `GitHub Actions`

用明确的目录排除规则盘点元数据，处理同名分组冲突、报告重复计入和读取失败。提供微型合成样例、15 项测试及 Windows / Ubuntu CI。

[源码与用法](https://github.com/GuHang2011/windows-file-organization-toolkit) · [交互样例与实现取舍](https://guhang2011.github.io/cases/file-inventory/)

<sub>不移动或删除源文件；逻辑长度不是实际占用，不提供大目录性能结论。</sub>

**更多动手体验：** [配置驱动表单](https://guhang2011.github.io/demos/low-code-form/) · [数据质量实验](https://guhang2011.github.io/demos/data-preparation/) · [多模态决策门控](https://guhang2011.github.io/demos/reliability-gates/)

→ [全部项目与仓库导航](docs/project-index.md)

## 02 / 研究记录

**多模态虚假新闻检测** · 第一作者 · **Neurocomputing 已投稿，尚未录用**  
修订稿重分析 344 次归档训练运行，考察冻结 CLIP 下的融合收益、决策工作点与数据伪线索。[研究解读](https://guhang2011.github.io/research/fusion-audit.html) · [结果重分析代码](https://github.com/GuHang2011/frozen-clip-fake-news-fusion)。公开预测和标签支持指标重算；[11 月 2 日复算记录](https://guhang2011.github.io/research/reproducibility.html)中的 216 条结果与参考一致。完整训练与原始划分重建仍需额外材料。

**能源—水系统气候风险** · 第一作者 · **Climate Risk Management 已投稿，尚未录用**  
结合 TFT 与 GNN-CRP，研究中国 30 省 2005—2024 年的时间依赖与跨区域风险传播。[研究介绍](https://guhang2011.github.io/research/climate-risk.html)。当前入口提供摘要与方法说明。

**拟博士研究：** 资源受限条件下的可靠多模态情绪识别，关注预算约束适配、证据不足时的决策，以及持续更新中的遗忘问题。[研究计划（讨论稿）](https://guhang2011.github.io/research/statement.html) · [起步实验方案](https://guhang2011.github.io/research/first-study.html) · [其他研究与学位论文](docs/project-index.md#research)

## 03 / 最近在整理的笔记

**最新工程复盘：从工具和业务代码中找具体问题。**

- [目录盘点：先定义范围，再看数字](https://guhang2011.github.io/notebook/inventory-scope-review.html)
- [事项汇总之后，权限还要逐项检查](https://guhang2011.github.io/notebook/work-center-boundaries.html)
- [已读不等于办完](https://guhang2011.github.io/notebook/notification-read-state.html) · [备份恢复的差异与冲突](https://guhang2011.github.io/notebook/backup-restore-review.html)

<details>
<summary>继续阅读低代码专题</summary>

**低代码专题：从表单配置到工程维护。**

- **[低代码表单：配置、用户输入和界面状态为什么要分开](https://guhang2011.github.io/notebook/low-code-state-layers.html)** — 改标题、调顺序、改类型，分别怎样处理用户输入。
- **[低代码字段联动：隐藏、必填和权限不能混为一谈](https://guhang2011.github.io/notebook/low-code-rules.html)** — 从条件显示到提交规则，再到异步选项的响应归属。
- **[低代码上线心得：配置也需要版本、迁移与回滚](https://guhang2011.github.io/notebook/low-code-release.html)** — 格式版本、业务修订、数据迁移和配置回退如何区分。

[打开表单 Demo](https://guhang2011.github.io/demos/low-code-form/) · [全部学习笔记](https://guhang2011.github.io/notebook/) · [工程复盘仓库](https://github.com/GuHang2011/engineering-notes) · [按主题阅读](docs/project-index.md#notes)

<sub>结合公开源码整理；字段联动、迁移和发布回滚为后续设计。笔记使用 AI 辅助起草与翻译，区分已有实现与拟验证项。</sub>

</details>

## 04 / 教学与资料整理

- **[AI 与数据技术课程资料](https://github.com/GuHang2011/ai-course-materials)**：6 份文字参考稿，覆盖 AI 应用、大数据、Spark、腕表 GUI 与制造业案例。[在线阅读地图](https://guhang2011.github.io/teaching/)提供主题入口与练习建议。
- **[文件整理方法](https://github.com/GuHang2011/file-organization-notes)**：目录盘点、哈希核对、可恢复归档与第三方 skills 来源导航；附整理核对表。

<sub>课程材料保留教材及第三方来源说明；参考稿与练习建议不作为已验证的教学效果。技能导航不代表自行开发了上游工具。</sub>

---

<sub>内容整理于 2026-11-04。投稿状态依据已提供的信息；项目运行条件、来源和验证范围见各仓库说明。</sub>
