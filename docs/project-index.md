# 项目与学习导航

[返回个人首页](../README.md) · [个人网站](https://guhang2011.github.io/) · [全部在线演示](https://guhang2011.github.io/#demos)

这里按“系统开发 → 交互实验 → 模型与研究 → 学习笔记”组织公开材料。每个入口说明可以看什么，以及当前实现范围。

## 系统开发

- **[沭阳之家](https://github.com/GuHang2011/shuyang-home)**：Vue 3 / Element Plus / uni-app / Spring Boot。会员、活动、论坛、聊天与文件管理；本地可运行试点。[截图](https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots) · [部署说明](https://github.com/GuHang2011/shuyang-home/blob/main/docs/启动与部署.md)。
- **[禾镜 FieldLens](https://github.com/GuHang2011/fieldlens)**：图像检测、结果筛选、复核与记录导出。[在线体验](https://guhang2011.github.io/fieldlens/)为预设标注演示，本地真实推理需要自备授权模型。
- **[辅导员工作流案例](https://github.com/GuHang2011/counselor-workflow-showcase)**：角色交互、状态转换、版本检查和重试契约。[静态演示](https://guhang2011.github.io/counselor-workflow-showcase/)，不包含真实学生数据。
- **[丝路智链](https://guhang2011.github.io/cases/silkroad/)**：从既有学院应用改造的跨境订单教学案例，关注状态、库存、权限与幂等。[界面图集](https://guhang2011.github.io/cases/silkroad/#screenshots) · [一致性笔记](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/cases/silkroad/order-consistency.md)。支付与设备为仿真。
- **[早期前端工程经历](https://guhang2011.github.io/cases/early-frontend/)**：生产反馈 PC / 移动端、思悦后台与电信固网平台；按原简历整理场景、职责和技术栈，关联 Demo 为独立学习示例。
- **[高校资料归档与协作实践](https://github.com/GuHang2011/engineering-notes)**：项目复盘、浏览器兼容与部署检查表。[界面截图](https://github.com/GuHang2011/engineering-notes/tree/main/screenshots)采用合成测试数据，未公开私有业务代码。

## 交互实验

| 入口 | 建议尝试 | 实现范围 |
| --- | --- | --- |
| [React 工作流](https://guhang2011.github.io/demos/react-workflow/) | 模拟失败重试、版本冲突刷新与重新确认 | React / TypeScript / Ant Design；合成任务与模拟接口 |
| [配置驱动表单](https://guhang2011.github.io/demos/low-code-form/) | 导入无效 JSON，再检查原输入是否保留 | 自定义 Schema、渲染与导入校验；独立学习示例 |
| [数据质量实验](https://guhang2011.github.io/demos/data-preparation/) | 比较保留记录和隔离记录，查看规则影响 | 内置合成样例，不支持任意 CSV 上传 |
| [多模态决策门控](https://guhang2011.github.io/demos/reliability-gates/) | 调整质量、置信度与分歧，观察决策变化 | 概念演示；不是经过训练或校准的研究模型 |
| [前端与数据实验室](https://guhang2011.github.io/frontend-data-lab/) | 查看数据处理、图表与模型评估入口 | 教学数据与小型实验 |

[React 源码](https://github.com/GuHang2011/GuHang2011.github.io/tree/main/demos/react-workflow) · [表单源码](https://github.com/GuHang2011/GuHang2011.github.io/tree/main/demos/low-code-form) · [项目视频与动画](https://guhang2011.github.io/#project-films)

<a id="research"></a>

## 模型与研究

- **[Frozen CLIP fusion analysis](https://github.com/GuHang2011/frozen-clip-fake-news-fusion)**：修订论文的结果重分析脚本、预测、标签及质量摘要。可重算公开指标；不包含原始新闻、图片、原始划分 ID、少样本列表和特征缓存，因此不等于完整训练复现。
- **[KICP](https://github.com/GuHang2011/KICP)**：CLIP、提示学习、共注意力和知识检索相关实验实现。运行需要项目文档列出的外部数据与资源；与修订稿重分析仓库分开阅读。
- **[KAPT](https://github.com/GuHang2011/KAPT)**：基于 KANO 的学习改造，保留上游来源；重点是提示组件、早停与样本对齐集成。[阅读入口](https://github.com/GuHang2011/KAPT/blob/main/REVIEWER_ENTRY.md) · [运行条件](https://github.com/GuHang2011/KAPT/blob/main/docs/reproduction.md) · [早停演示](https://guhang2011.github.io/cases/kapt/)。
- **[Frontend & Data Lab](https://github.com/GuHang2011/frontend-data-lab)**：Python、SQL、数据标注一致性、有边界的爬虫与模型评估。[阅读地图](https://github.com/GuHang2011/frontend-data-lab/blob/main/REVIEWER_ENTRY.md) · [模型自学路线](https://github.com/GuHang2011/frontend-data-lab/blob/main/docs/modeling-reading-map.md)。

[实际复算记录](https://guhang2011.github.io/research/reproducibility.html)：216 条少样本配置结果与参考一致，未重跑训练。

### 论文与研究计划

- **Where do fusion gains come from in low-resource multimodal fake news detection? Operating points, archive artifacts and frozen CLIP baselines**：第一作者；修订后投稿 Neurocomputing，尚未录用。[解读](https://guhang2011.github.io/research/fusion-audit.html)。
- **Hybrid AI Framework for Multi-Hazard Climate Risk Governance in Renewable Energy-Water Nexus Systems**：第一作者；投稿 Climate Risk Management，尚未录用。[摘要与方法图](https://guhang2011.github.io/research/climate-risk.html)。
- **Validation sensitivity in limited-label news classification**：所提供简历记录为投稿 DASFAA 2027，作者排序未明确。
- **Vision-language multimodal behavior prediction**：所提供简历记录为第一作者、ISCAIT 2026 已录用。
- **硕士论文**：*Dental Deformities Prediction Using Bayesian Networks among Adolescents*，使用 R 与贝叶斯网络研究临床数据的条件关系。
- **[拟博士研究计划](https://guhang2011.github.io/research/statement.html)**：可靠多模态情绪识别；预算约束适配、证据感知决策与遗忘约束更新均为拟研究。[实验协议清单](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/research/protocol.md)。

投稿状态按已提供信息整理，2026-11-02 更新页面不代表重新确认了期刊审稿进度。[完整简历](https://guhang2011.github.io/research/cv.html) · [导师阅读入口](https://guhang2011.github.io/research/reviewer-guide.html)。

<a id="notes"></a>

[起步实验协议](https://guhang2011.github.io/research/first-study.html)：有限预算下比较单模态与简单融合基线，属于尚未执行的研究计划。

## 学习笔记：从一个问题开始

### 低代码：配置、交互与交付

- [低代码表单：配置、用户输入和界面状态为什么要分开](https://guhang2011.github.io/notebook/low-code-state-layers.html)
- [低代码字段联动：隐藏、必填和权限不能混为一谈](https://guhang2011.github.io/notebook/low-code-rules.html)
- [低代码上线心得：配置也需要版本、迁移与回滚](https://guhang2011.github.io/notebook/low-code-release.html)
- [配置校验与稳定字段键](https://guhang2011.github.io/notebook/low-code-contracts.html) · [错误导入如何保住旧表单](https://guhang2011.github.io/notebook/schema-import-review.html)

[配套表单 Demo](https://guhang2011.github.io/demos/low-code-form/)；联动、迁移与发布流程目前为扩展设计。

### 前端与 AI 辅助开发

- [审阅 AI 辅助代码：先复现旧响应覆盖新输入](https://guhang2011.github.io/notebook/ai-code-race-review.html)
- [审核失败之后：重试、刷新与重置](https://guhang2011.github.io/notebook/workflow-recovery-review.html)
- [导入配置前，为什么必须保住旧表单](https://guhang2011.github.io/notebook/schema-import-review.html)
- [双语搜索、焦点与动态效果](https://guhang2011.github.io/notebook/accessible-interactions.html)
- [订单幂等与库存一致性](https://guhang2011.github.io/notebook/order-idempotency.html)
- [权限边界与可复查交付](https://guhang2011.github.io/notebook/permission-boundaries.html)

### 数据与模型

- [数据清洗的质量契约](https://guhang2011.github.io/notebook/data-quality.html)
- [早停、样本对齐与集成](https://guhang2011.github.io/notebook/model-selection.html)
- [提示学习的张量契约](https://guhang2011.github.io/notebook/prompt-contracts.html)
- [TFT：预测发出时，哪些信息已知](https://guhang2011.github.io/notebook/tft-information-boundary.html)
- [GNN：消息传递之前，先定义风险图](https://guhang2011.github.io/notebook/gnn-risk-graphs.html)
- [时空数据验证](https://guhang2011.github.io/notebook/spatiotemporal-validation.html)
- [证据感知多模态决策](https://guhang2011.github.io/notebook/multimodal-gates.html) · [总标注预算](https://guhang2011.github.io/notebook/label-budget-ledger.html) · [模型版本回退](https://guhang2011.github.io/notebook/model-version-rollback.html)

### 生成式 AI 与工程交付

- [数字人技术路线](https://guhang2011.github.io/notebook/digital-human.html) · [文生图原理与操作](https://guhang2011.github.io/notebook/text-to-image.html) · [版本、提示词与证据链](https://guhang2011.github.io/notebook/generative-workflow.html)
- [研究 Demo 交付时还需要什么](https://guhang2011.github.io/notebook/research-demo-handoff.html) · [气候研究协议的 Python 教学示例](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/notebook/examples/climate-protocol-README.md)
- [容量测试复盘](https://github.com/GuHang2011/engineering-notes/blob/main/notes/capacity-testing.md) · [报告模板](https://github.com/GuHang2011/engineering-notes/blob/main/templates/capacity-report.md)
- [个人 AI 密钥与模型接入](https://github.com/GuHang2011/engineering-notes/blob/main/notes/personal-ai-keys.md) · [验收表](https://github.com/GuHang2011/engineering-notes/blob/main/templates/ai-provider-checklist.md)
- [校园系统部署](https://github.com/GuHang2011/engineering-notes/blob/main/notes/campus-system-deployment.md) · [发布检查表](https://github.com/GuHang2011/engineering-notes/blob/main/templates/release-checklist.md)

[在线笔记目录](https://guhang2011.github.io/notebook/)支持主题筛选、搜索和打印。[官方资料导航](https://github.com/GuHang2011/engineering-notes/blob/main/resources/official-reading.md)。

## 早期课程与站点源码

- [WQD7006](https://github.com/GuHang2011/WQD7006)：Python 数据采集、区域汇总和可视化课程练习。
- [introdatascience](https://github.com/GuHang2011/introdatascience)：R 数据提取、清洗和 JSON 序列化课程练习。
- [个人网站源码](https://github.com/GuHang2011/GuHang2011.github.io)：作品集、案例、交互演示与双语笔记。
- [原横幅与制作说明](../assets/README.md)：保留的早期研究主题动画。

## 工程与教学背景

工程实践涉及 Vue / React、TypeScript、动态表单、接口契约、文档解析与检索，以及 Python、R、SQL 和数据分析。教学围绕数据采集、存储、分析和可视化展开。具体任职、职责与项目经历见[简历](https://guhang2011.github.io/research/cv.html)；私有项目经历与公开学习 Demo 分开说明。
