# Hang Gu · 顾航

Lecturer · MSc in Computer Science (Data Science), Universiti Malaya

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/research-still.png" />
    <img src="assets/research-motion.gif" alt="Hang Gu — research and engineering: questions, experiments, useful systems" width="1400" />
  </picture>
</p>

<p align="center"><sub><a href="assets/research-still.png">静态横幅 / Static banner</a> · <a href="assets/README.md">原创动画 / Behind the animation</a></sub></p>

<p align="center">
  <a href="https://guhang2011.github.io/">Engineering & research portfolio</a> ·
  <a href="https://guhang2011.github.io/#engineering">Engineering highlights</a> ·
  <a href="https://guhang2011.github.io/research/statement.html">Research brief</a> ·
  <a href="https://guhang2011.github.io/research/cv.html">Academic CV</a> ·
  <a href="https://guhang2011.github.io/notebook/">Learning notebook</a> ·
  <a href="mailto:guhang2011@126.com">guhang2011@126.com</a>
</p>

I'm **Hang Gu (顾航)**, a lecturer and teaching section director at **江苏财经职业技术学院**, with an MSc in Computer Science (Data Science) from **Universiti Malaya** and a background in frontend engineering.

**Engineering focus:** frontend systems, explicit workflow states, data-quality checks and verifiable delivery. The public cases connect implementation choices with code, interactive demonstrations and scoped verification records.

**Research direction:** multimodal learning and intelligent systems engineering. My proposed doctoral work studies **reliable multimodal emotion recognition** with limited labels, degraded inputs and expanding classes.

这里以工程技术为主：前端交互、工作流状态、数据质量与可复查交付。通过公开代码、项目演示和学习笔记说明设计取舍；同时保留有限标注下的多模态学习与模型评估研究记录。

## Research

**27 October 2026 update / 研究更新：** **第一作者 / First author** — *Hybrid AI Framework for Multi-Hazard Climate Risk Governance in Renewable Energy-Water Nexus Systems*，已投稿 **Climate Risk Management**，**尚未录用 / submitted, not accepted**。围绕中国 30 个省份（2005—2024）的能源—水系统，以 TFT–GNN 结合时间建模与跨区域风险传播。[双语研究介绍与方法示意 / Study overview](https://guhang2011.github.io/research/climate-risk.html)。

**24 October 2026 update:** the revised manuscript has been submitted to **Neurocomputing** and is not accepted. New title: *Where do fusion gains come from in low-resource multimodal fake news detection? Operating points, archive artifacts and frozen CLIP baselines*. [Study overview](https://guhang2011.github.io/research/fusion-audit.html) · [Updated doctoral research brief](https://guhang2011.github.io/research/statement.html).

**研究主线：** 从融合收益审计，走向资源受限交互中的可靠情绪识别。2026 年 10 月 25 日依据 RP 更新：三项方法研究递进展开，系统验证贯穿全过程；以下均为拟研究内容。

| 拟研究 / Proposed study | 要回答的问题 / Question | 验证依据 / Planned evidence |
| :--- | :--- | :--- |
| **01 预算约束适配** · Budget-aware adaptation | 复杂融合是否值得额外成本？ | 训练、选模、校准统一预算；Macro-F1、UAR、配对重复与成本 |
| **02 证据感知决策** · Evidence-aware decisions | 证据不足时何时请求复核？ | 质量、分歧、校准消融；相同风险或覆盖率下的比较 |
| **03 遗忘约束更新** · Continual adaptation | 学习新类后旧类与置信质量能否保持？ | 固定回放；新旧类表现、遗忘、校准漂移与更新开销 |
| **04 系统综合验证** · Integrated validation | 受损输入与运行异常下整套方法是否一致？ | 独立测试、端到端延迟、复核触发与版本回退 |

[**Read the bilingual research plan / 阅读双语研究计划**](https://guhang2011.github.io/research/statement.html) · [Protocol checklist / 实验协议清单](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/research/protocol.md)

**工程基础如何支撑研究：** 电信开户系统中的动态表单、状态机与接口契约，弱网应用中的离线缓存与恢复同步，为拟研究原型的缺失输入处理、异常恢复和版本一致性提供工程基础。[公开状态机示例](https://guhang2011.github.io/demos/react-workflow/)用于说明相关能力，属于独立学习演示。

### Existing research / 已有研究记录

| Research question | Approach | Authorship | Recorded status |
| :--- | :--- | :--- | :--- |
| **[Climate risk in renewable energy–water systems](https://guhang2011.github.io/research/climate-risk.html)** | TFT + GNN-CRP; temporal dependence and interregional propagation; 30 Chinese provinces, 2005–2024 | **First author / 第一作者** | Submitted to **Climate Risk Management**; **not accepted / 尚未录用** |
| **[Where do fusion gains come from?](https://guhang2011.github.io/research/fusion-audit.html)** · Low-resource multimodal fake-news detection | Reanalysis of **344 archived training runs**: frozen-CLIP baselines, decision operating points and archive artifacts; FCP is studied, not claimed as a new architecture | **First author** | Revised and submitted to **Neurocomputing**; **not accepted** |
| **Validation sensitivity in limited-label news classification** | Model selection and paired validation sampling | Order not stated in CV | Submitted to **DASFAA 2027** |
| **Vision-language multimodal behavior prediction** | VideoMAE, DistilBERT, cross-attention and LSTM temporal modeling | **First author** | Accepted at **ISCAIT 2026** |

The Neurocomputing entry follows the revised manuscript and my status update on 24 October 2026. The Climate Risk Management entry follows my abstract and first-author confirmation of 27 October 2026. Other entries follow the supplied CV. The homepage update does not rerun research experiments.

My MSc thesis, *Dental Deformities Prediction Using Bayesian Networks among Adolescents*, used R and Bayesian networks to study conditional relationships in clinical data.

[Research brief · Discussion draft](https://guhang2011.github.io/research/statement.html) · [Code & verification evidence](https://guhang2011.github.io/research/#evidence) · [Full academic CV](https://guhang2011.github.io/research/cv.html)

<a id="selected-work"></a>

## Selected work / 精选项目

<!-- shuyang-home:start -->
### 沭阳之家 · Shuyang Home

移动优先的老乡会员社区，支持会员与版主管理、活动定位签到、资源互换、图片／文件聊天、论坛语音和家乡特产订单；天气支持设备定位与网络城市估算。基于 **Vue 3 · uni-app · Spring Boot**，提供电脑网页、Android / iPhone H5 与微信小程序源码。

[**申博作品集 / Portfolio**](https://guhang2011.github.io/#project-shuyang) · [**源码与部署 / Source & setup**](https://github.com/GuHang2011/shuyang-home) · [**完整图集 / Screenshots**](https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots) · [**语音功能 / Forum audio**](https://github.com/GuHang2011/shuyang-home/blob/main/docs/论坛语音.md)

<p align="center">
  <a href="https://github.com/GuHang2011/shuyang-home"><img src="https://raw.githubusercontent.com/GuHang2011/shuyang-home/main/docs/screenshots/mobile-home.png" alt="沭阳之家手机首页：深蓝、米白与暖金配色，会员服务和天气入口" width="220" /></a>
  <a href="https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots"><img src="https://raw.githubusercontent.com/GuHang2011/shuyang-home/main/docs/screenshots/mobile-forum-audio.png" alt="沭阳之家论坛语音帖子与回复：使用合成提示音的隔离验收界面" width="220" /></a>
</p>

**验证 / Verification:** 60 项后端测试、17 个共享异步场景通过；Web、H5、小程序构建通过。当前为本地试点版本，小程序待真机验收与发布。语音截图使用合成测试数据。[验收记录 / Validation scope](https://github.com/GuHang2011/shuyang-home/blob/main/docs/验收记录.md)。

[天气选城与网络定位截图 / Weather & location](https://github.com/GuHang2011/shuyang-home/blob/main/docs/screenshots/mobile-weather-city.png) · [会员欢迎界面 / Membership entry](https://github.com/GuHang2011/shuyang-home/blob/main/docs/screenshots/desktop-member-welcome.png)
<!-- shuyang-home:end -->


**早期工程项目整理 / Earlier frontend work:** [生产反馈 PC 端、移动端、思悦后台与电信固网平台](https://guhang2011.github.io/cases/early-frontend/) — 从旧简历整理业务场景、本人职责和技术栈；关联 Demo 为独立学习示例。[GitHub 项目文档](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/cases/early-frontend/README.md)。

| Work | Focus and scope | Read / verify / try |
| :--- | :--- | :--- |
| **[Shuyang Home · 沭阳之家](https://github.com/GuHang2011/shuyang-home)** · Community engineering | Mobile-first Vue / uni-app community; membership, location check-in, moderated voice posts, private attachments and offline-settled specialty orders | [Source & setup](https://github.com/GuHang2011/shuyang-home#readme) · [Screenshots](https://github.com/GuHang2011/shuyang-home/tree/main/docs/screenshots) · [Validation](https://github.com/GuHang2011/shuyang-home/blob/main/docs/验收记录.md) |
| **[KICP](https://github.com/GuHang2011/KICP)** · Research | CLIP, learned prompts, co-attention and knowledge retrieval for multimodal fake-news detection | [Code & run requirements](https://github.com/GuHang2011/KICP#readme) |
| **[KAPT](https://github.com/GuHang2011/KAPT)** · Reproducibility learning | Curated **KANO-based** prompt components, validated early stopping and sample-aligned probability ensembles; synthetic examples | [Reading & source attribution](https://github.com/GuHang2011/KAPT/blob/main/REVIEWER_ENTRY.md) · [Reproduction](https://github.com/GuHang2011/KAPT/blob/main/docs/reproduction.md) · [Early-stopping replay](https://guhang2011.github.io/cases/kapt/) |
| **[Silk Road Intelligence](https://guhang2011.github.io/cases/silkroad/)** · Teaching engineering | Cross-border order workflow, stock consistency, permission scopes and simulated fulfillment; adapted from an existing college application | [Screenshot gallery](https://guhang2011.github.io/cases/silkroad/#screenshots) · [Engineering notes](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/cases/silkroad/order-consistency.md) |
| **[Counselor Workflow](https://github.com/GuHang2011/counselor-workflow-showcase)** · Engineering case | Role-based interaction, state transitions, version checks and retry contracts; curated static demonstration | [Architecture & scope](https://github.com/GuHang2011/counselor-workflow-showcase#readme) · [Online demo](https://guhang2011.github.io/counselor-workflow-showcase/) |
| **[Frontend & Data Lab](https://github.com/GuHang2011/frontend-data-lab)** · Learning experiments | Synthetic-data analytics, annotation agreement, bounded crawling and model-evaluation notes | [Reading map](https://github.com/GuHang2011/frontend-data-lab/blob/main/REVIEWER_ENTRY.md) · [Interactive lab](https://guhang2011.github.io/frontend-data-lab/) |
| **[React Workflow Board](https://guhang2011.github.io/demos/react-workflow/)** · React learning project | Typed state transitions, version conflicts, retry paths and keyboard-readable controls; synthetic tasks | [Live React app](https://guhang2011.github.io/demos/react-workflow/) · [React source](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/demos/react-workflow/src/App.tsx) · [Project notes](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/demos/react-workflow/README.md) |
| **[Schema-driven Form Studio](https://guhang2011.github.io/demos/low-code-form/)** · Low-code engineering example | Schema / renderer separation, field ordering, explicit validation and JSON inspection; synthetic request form | [Online studio](https://guhang2011.github.io/demos/low-code-form/) · [Schema](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/demos/low-code-form/schema.json) · [Design notes](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/demos/low-code-form/README.md) |
| **[Reliability Gate Lab](https://guhang2011.github.io/demos/reliability-gates/)** · Multimodal reliability learning project | Synthetic quality, confidence, disagreement and missing-modality controls; shows auto-output, review and insufficient-evidence states | [Online lab](https://guhang2011.github.io/demos/reliability-gates/) · [Learning note](https://guhang2011.github.io/notebook/multimodal-gates.html) · [Research question](https://guhang2011.github.io/research/statement.html#rq-decision) |

**Reading path:** research question → core code → verification steps and limitations → interactive case. [Model self-study notes](https://github.com/GuHang2011/frontend-data-lab/blob/main/docs/modeling-reading-map.md).

## Latest learning notes / 新增学习笔记

[笔记集现有 19 篇](https://guhang2011.github.io/notebook/)，新增以下四篇：

- [TFT 学习：预测发出时，哪些信息真的已知？](https://guhang2011.github.io/notebook/tft-information-boundary.html)
- [GNN 学习：消息传递之前，先定义风险图](https://guhang2011.github.io/notebook/gnn-risk-graphs.html)
- [时空数据验证：不能只按样本行随机切分](https://guhang2011.github.io/notebook/spatiotemporal-validation.html)
- [项目心得：一个研究 Demo，交付时还应该带上什么？](https://guhang2011.github.io/notebook/research-demo-handoff.html)

[可运行的 Python 示例与 10 项测试](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/notebook/examples/climate-protocol-README.md)。合成教学数据；不作为论文的实验结果。

## Engineering highlights / 工程亮点

| Capability | What is visible in the public work |
| :--- | :--- |
| **Interface contracts** | Dynamic forms, role-scoped states, keyboard access, responsive layouts and browser-level checks. |
| **Data quality** | Deterministic cleaning, annotation agreement, quarantine records, CSV/SQLite/JSON hand-offs and bounded crawling. |
| **Model evaluation** | Baselines, validation sensitivity, threshold selection, confusion analysis and sample-aligned prediction ensembles. |
| **Evidence-shaped delivery** | Release gates, artifact hashes, scope notes, synthetic fixtures and explicit “not rerun” boundaries. |

**工程阅读顺序：** 需求问题 → 输入与状态契约 → 核心实现 → 定向检查 → 范围与限制。主页的 [Engineering lens](https://guhang2011.github.io/#engineering) 将这些能力映射到项目案例、在线实验和验证记录。

**18-second project walkthroughs / 项目动画：** [Early stopping · 模型早停](https://guhang2011.github.io/#film-kapt) · [Data quality audit · 数据质量审计](https://guhang2011.github.io/#film-data). Silent animations generated from the demo logic with synthetic data; captions and interactive experiments are available on the site.

The learning lab is a newly assembled educational example. It is separate from employer software and research experiments. KICP contains research code; its README describes the external data and assets required to run it. KAPT preserves KANO source attribution and documents the scope of its component tests.

<details>
<summary>Earlier coursework / 早期课程练习</summary>

- [WQD7006](https://github.com/GuHang2011/WQD7006): historical Python exercises in data collection, regional aggregation and visualization.
- [introdatascience](https://github.com/GuHang2011/introdatascience): early R exercises in extraction, data cleaning and JSON serialization.

</details>

<details>
<summary>丝路智链 · 桌面与手机界面 / Silk Road Intelligence gallery</summary>

从既有学院应用改造的跨境订单教学案例，展示中哈合作主题登录、营销审核、订单台账与物流仿真。下列业务界面使用合成教学数据。

<a href="https://guhang2011.github.io/cases/silkroad/"><img src="https://guhang2011.github.io/assets/silkroad/login-desktop.jpg" alt="丝路智链桌面登录页，登录字段为空" width="760"></a>

<table><tr>
<td><a href="https://guhang2011.github.io/cases/silkroad/#screenshots"><img src="https://guhang2011.github.io/assets/silkroad/orders-desktop.jpg" alt="订单管理界面，合成教学订单" width="370"></a></td>
<td><a href="https://guhang2011.github.io/cases/silkroad/#screenshots"><img src="https://guhang2011.github.io/assets/silkroad/fulfillment-desktop.jpg" alt="物流履约界面，合成仿真任务" width="370"></a></td>
</tr></table>

[完整图集与设计说明](https://guhang2011.github.io/cases/silkroad/) · [状态、库存与幂等笔记](https://github.com/GuHang2011/GuHang2011.github.io/blob/main/cases/silkroad/order-consistency.md)

既有后端报告记录 41 项通过（含共享账户基础测试），本次未重跑。支付与设备为仿真，来源和验证范围详见案例。

</details>

## Learning notebook / 学习与项目心得

把代码中的问题整理成可以复查的笔记：为什么这样设计、如何验证、还有什么没有回答。**[在线阅读 19 篇双语笔记](https://guhang2011.github.io/notebook/)**，支持主题筛选、搜索和打印。

| 主题 / Topic | 阅读入口 / Read |
| :--- | :--- |
| 近期学习 / Latest | [证据感知多模态决策](https://guhang2011.github.io/notebook/multimodal-gates.html) · [总标注预算](https://guhang2011.github.io/notebook/label-budget-ledger.html) · [模型版本回退](https://guhang2011.github.io/notebook/model-version-rollback.html) |
| 模型学习 | [早停、样本对齐与集成](https://guhang2011.github.io/notebook/model-selection.html) · [提示学习的张量契约](https://guhang2011.github.io/notebook/prompt-contracts.html) |
| 前端与数据 | [双语搜索、焦点与动态效果](https://guhang2011.github.io/notebook/accessible-interactions.html) · [数据清洗的质量契约](https://guhang2011.github.io/notebook/data-quality.html) |
| 项目心得 | [订单幂等与库存一致性](https://guhang2011.github.io/notebook/order-idempotency.html) · [权限边界与可复查交付](https://guhang2011.github.io/notebook/permission-boundaries.html) |
| 生成式模型与工程复现 | [数字人技术路线](https://guhang2011.github.io/notebook/digital-human.html) · [文生图原理与操作](https://guhang2011.github.io/notebook/text-to-image.html) · [版本、提示词与证据链](https://guhang2011.github.io/notebook/generative-workflow.html) |

Collection updated on 27 October 2026 from public code and project documents, with AI-assisted drafting and translation. Each note separates source observations, teaching examples and proposed checks, with links to evidence; these are not new benchmark results or a historical lab diary.

## Engineering field notes / 工程实践

从本地高校资料归档与协作项目整理的原创笔记，记录设计取舍、验证结果和待完成的工作。附上线、容量测试与个人 AI 接入模板。

[全部 6 篇笔记 / All notes](https://github.com/GuHang2011/engineering-notes) · [官方资料导航 / Official reading](https://github.com/GuHang2011/engineering-notes/blob/main/resources/official-reading.md)

<details>
<summary>Design decisions, validation and reusable checklists / 设计取舍与验证</summary>

| Start with a question | Read / Use |
| :--- | :--- |
| “500 人在线”到底验证了什么？ | [容量复盘](https://github.com/GuHang2011/engineering-notes/blob/main/notes/capacity-testing.md) · [测试报告模板](https://github.com/GuHang2011/engineering-notes/blob/main/templates/capacity-report.md) |
| 每个账号如何使用自己的 AI？ | [密钥与模型接入](https://github.com/GuHang2011/engineering-notes/blob/main/notes/personal-ai-keys.md) · [验收表](https://github.com/GuHang2011/engineering-notes/blob/main/templates/ai-provider-checklist.md) |
| 从开发机到学校服务器还差什么？ | [部署笔记](https://github.com/GuHang2011/engineering-notes/blob/main/notes/campus-system-deployment.md) · [发布检查表](https://github.com/GuHang2011/engineering-notes/blob/main/templates/release-checklist.md) |

These are original notes and reusable checklists, with explicit testing limits. Linked references stay on their official sites; private product code and user data are not published here.

</details>

<details>
<summary>上传系统界面预览 / Upload system preview</summary>

来自本地 Edge/WebKit 自动化测试夹具的合成界面截图，仅用于展示布局和功能状态，不包含真实账号、API Key 或用户文件。

<table>
  <tr>
    <td><a href="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/archive-center-desktop.png"><img src="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/archive-center-desktop.png" alt="资料归档中心与上传成功状态" width="280"></a></td>
    <td><a href="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/workbench-desktop.png"><img src="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/workbench-desktop.png" alt="系统工作台与任务概览" width="280"></a></td>
    <td><a href="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/ai-settings-desktop.png"><img src="https://raw.githubusercontent.com/GuHang2011/engineering-notes/main/screenshots/ai-settings-desktop.png" alt="个人 AI 配置页面" width="280"></a></td>
  </tr>
</table>

[查看完整截图目录和说明](https://github.com/GuHang2011/engineering-notes/tree/main/screenshots)
</details>

## Engineering & teaching

<details>
<summary>Applied experience and teaching / 工程与教学经历</summary>

- **Intelligent applications:** document parsing, entity extraction, semantic retrieval and RAG workflows.
- **Frontend systems:** Vue / React, TypeScript, dynamic forms, interface contracts, accessibility and performance.
- **Data systems:** Python, R, SQL, Hadoop / Spark, reproducible analysis and visualization.
- **Teaching:** computing courses and practical projects spanning data collection, storage, analysis and presentation.

Recent applied work includes an ongoing AI contract-management project, an ongoing intelligent information-retrieval project, and a completed modular administrative-dashboard project. These are described as experience; their proprietary source code is not part of this profile.

</details>

---

<sub>Profile updated 28 October 2026; Shuyang Home has been added with mobile screenshots, forum audio and scoped validation records; the homepage now also includes a synthetic reliability-gate lab and three notes extending the proposed research protocol. The Neurocomputing entry follows the revised manuscript and the author’s latest status update; other research states follow the supplied CV; see the <a href="https://guhang2011.github.io/">portfolio</a> for evidence and scope.</sub>
