# Power & AI Initiative Research Summary

##### **FACULTY CO-DIRECTORS:**

###### **Le Xie, Gordon McKay Professor** **of Electrical Engineering** **Minlan Yu, Gordon McKay Professor** **of Computer Science**


#### Efficient LLM Scheduling


**1. Don't Stop Me Now: Embedding Based Scheduling for LLMs**
[http://minlanyu.seas.harvard.edu/writeup/iclr25.pdf](http://minlanyu.seas.harvard.edu/writeup/iclr25.pdf)


This paper proposes TRAIL, a size-based preemption scheduling method that recycles intermediate Transformer layer embeddings into a lightweight classifier to continuously predict the remaining sequence length of active requests, optimizing preemption to significantly lower mean latency and time-to-first-token.


**2. Fast Inference for Augmented Large Language Models**
[http://minlanyu.seas.harvard.edu/writeup/neurips25.pdf](http://minlanyu.seas.harvard.edu/writeup/neurips25.pdf)


This paper optimizes the scheduling of API-augmented LLM requests by predicting
their total memory consumption over time and assigning customized KV cache
handling strategies during external API calls to minimize end-to-end latency.




**3. Intra-Request Branch Orchestration for Efficient LLM**
**Reasoning**
[https://arxiv.org/abs/2509.24957](https://arxiv.org/abs/2509.24957)


This paper proposes an intra-request orchestration policy that uses lightweight linear
probing on LLM layer activations to predict branch correctness, enabling early
termination of dead-end paths and selective branching from promising ones.


**4. Ongoing work: Load Balancing in Mixture-of-Experts Systems.**
[https://arxiv.org/abs/2510.03293](https://arxiv.org/abs/2510.03293)

We introduced a plug-and-play inference routing algorithm for Mixture-of-Experts (MoE) models that dynamically adapts to the gate's score distribution, thereby reducing load imbalance and improving system throughput without retraining.



#### Energy-Efficient LLM Training and Inference


**5. TrainMover: An Interruption-Resilient and Reliable ML Training Runtime**
[https://arxiv.org/abs/2412.12636](https://arxiv.org/abs/2412.12636)


A resilient ML training runtime that eliminates the downtime and performance
degradation caused by frequent interruptions by using standby machines, two-phase delta-based communication, and sandboxed shadow iterations. Trainmover achieves second-level migration recovery and 99% training efficiency.

**6. Developing a power-aware MoE inference framework that dynamically adjusts software and hardware configurations to match the variations of power grid supply.**




#### Adaptive Modeling of Data Center Dynamics


**7. Data Center Control Against Sub-Synchronous Resonance: A Data-Driven**
**Approach**
[https://arxiv.org/pdf/2511.14141](https://arxiv.org/pdf/2511.14141)


As the backbone of modern digital infrastructure, data centers host a variety of
essential services such as cloud computing and artificial intelligence. Electric grid
operators, however, have limited experience and knowledge of the reliability risks of
data center interconnection due to their unique operational characteristics. An
emerging concern is the sub-synchronous resonance (SSR) which refer to unexpected
voltage/current oscillations at typical frequencies below 60/50 Hz. It remains unknown
whether and how the interactions between data centers and the grid may trigger
resonances, equipment damages, and even cascading failures. In this paper, we focus
on grid-connected data centers that draw electricity from the grid through power
factor correction (PFC) converters.



**8. LILAD: Learning In-context Lyapunov-stable Adaptive Dynamics Models**
[https://arxiv.org/pdf/2511.21846](https://arxiv.org/pdf/2511.21846)


System identification in control theory aims to approximate dynamical systems from
trajectory data. While neural networks have demonstrated strong predictive accuracy,
they often fail to preserve critical physical properties such as stability and typically
assume stationary dynamics, limiting their applicability under distribution shifts.
Existing approaches generally address either stability or adaptability in isolation,
lacking a unified framework that ensures both. We propose LILAD (Learning InContext Lyapunov-stable Adaptive Dynamics), a novel framework for system
identification that jointly guarantees adaptability and stability. LILAD simultaneously
learns a dynamics model and a Lyapunov function through in-context learning (ICL),
explicitly accounting for parametric uncertainty. Trained across a diverse set of tasks,
LILAD produces a stability-aware, adaptive dynamics model alongside an adaptive
Lyapunov certificate. At test time, both components adapt to a new system instance
using a short trajectory prompt, which enables fast generalization. To rigorously
ensure stability, LILAD also computes a state-dependent attenuator that enforces a
sufficient decrease condition on the Lyapunov function for any state in the new
system instance. This mechanism extends stability guarantees even under out-ofdistribution and out-of-task scenarios. We evaluate LILAD on benchmark autonomous systems and demonstrate that it outperforms adaptive, robust, and non-adaptive
baselines in predictive accuracy



**9. Crucial Role of Foundation Models in Enhancing the Interaction of AI and Power Systems: Achieving Integrated Frameworks**
[https://ieeexplore.ieee.org/document/11367249](https://ieeexplore.ieee.org/document/11367249)


The rapid emergence of large-scale generative artificial intelligence (GenAI) systems,
or foundation models (FMs), presents a dual challenge and opportunity for global
energy systems. While driving unprecedented computational demand and a sharp
increase in electricity consumption for both training and inference, FMs also introduce
significant volatility and unpredictability into power loads. This necessitates a
fundamental re-evaluation of short-term grid operations and long-term infrastructure
planning. This article argues that the same advanced AI capabilities responsible for
this energy disruption can also be leveraged to develop smarter and more resilient
energy management solutions. We propose an integrated framework where FMs
serve as tools for optimizing data center energy efficiency and enhancing grid control,
advocating for a converging research frontier that integrates AI, power systems, and
market design to navigate the energy implications of advanced AI sustainably.



#### Foundation Models for Power Systems


**10. PowerAgent: A Road Map Toward Agentic Intelligence in Power Systems:**
**Foundation Model, Model Context Protocol, and Workflow**
[https://ieeexplore.ieee.org/abstract/document/11131348](https://ieeexplore.ieee.org/abstract/document/11131348)


The operational resilience of electric power grids is facing growing challenges caused
by aging infrastructure, increasing system complexity, and a rising frequency of
extreme weather events. Traditional control paradigms, built around deterministic
models and human-in-the-loop decision making, will become insufficient to manage
the escalating demands on power grids. In response, recent advances in artificial
intelligence (AI)—particularly the emergence of general-purpose AI agents capable of
tool use, reasoning, and task orchestration—offer a new direction for enhancing grid
flexibility and resiliency. This article introduces the concept of the Power Agent: an AIenabled, context-aware assistant that leverages foundation models, standardized tool
interfaces, and structured workflows to support grid operation and planning
decisions.



**11. PowerMamba: A Deep State Space Model for Time Series Prediction in power**
**Systems**
[https://ieeexplore.ieee.org/abstract/document/11314771](https://ieeexplore.ieee.org/abstract/document/11314771)


Advanced time series prediction models are needed for closing the gap between the
forecasted and actual grid outcomes. In this paper, we introduce a multivariate time
series prediction model that combines traditional state space models with deep
learning methods to simultaneously capture and predict the underlying dynamics of
multiple time series. Additionally, we design a time series processing module that
incorporates high resolution external forecasts into sequence-to-sequence prediction
models, achieving this with negligible increases in size and no loss of accuracy. We
also release an extended dataset spanning five years of load, electricity price, ancillary
service price, and renewable generation. To complement this dataset, we provide an
open-access toolbox that includes our proposed model, the dataset itself, and several
state-of-the-art prediction models, thereby creating a unified framework for
benchmarking advanced machine learning approaches.The code is available at https://github.com/alimenati/PowerMamba




**12. Unlocking Multi-Task Electric Energy System Intelligence: Data Scaling Laws**
**and Performance with Limited Fine-Tuning**
[https://arxiv.org/pdf/2503.20040](https://arxiv.org/pdf/2503.20040)


Data scaling has revolutionized research fields like natural language processing,
computer vision, and robotics control, providing foundation models with remarkable
multi-task and generalization capabilities. In this paper, we investigate whether similar
data scaling laws exist in developing foundation models for power systems, and
whether appropriate data scaling can yield multi-task, cross-timescales capabilities
that can be deployed in unseen operational scenarios.


**Overview of the research.** The training data used in the research were either collected from real
world historical data or generated through well-recognized powers system simulation tools, such
as Powerworld, Pypower, etc. A hybrid dataset covering typical power system operation tasks was
then formed and converted into Question & Answer pairs. After specific transformation of float
numbers in the question data, the model were fine-tuned to generate expected answers, which
were finally converted back to appropriate form through the same transformation algorithm.


#### Electricity and Data Centers Policy Brief and Strategy


**13. AI Data Centers, and the U.S. Electric Grid: A Watershed Moment**

                                      [https://www.belfercenter.org/sites/default/files/2026](https://www.belfercenter.org/sites/default/files/2026-02/Mural%20et%20al_AI%20Data%20Centers%20Grid_20260206.pdf)
[02/Mural%20et%20al_AI%20Data%20Centers%20Grid_20260206.pdf](https://www.belfercenter.org/sites/default/files/2026-02/Mural%20et%20al_AI%20Data%20Centers%20Grid_20260206.pdf)


This policy brief outlines the current state (and potential consequences) of U.S. data
center electricity usage and corresponding grid expansion. The paper provides an
overview of the current data center and grid landscape followed by a discussion of
potential engineering and policy approaches to address ensuing challenges. The
foundations laid herein will inform our future research under the Project on Grid
Integration at the Harvard Kennedy School (HKS) and the Harvard School of
Engineering and Applied Sciences (SEAS). This Initiative aims to advance 1) the
development of new regulatory tools to incentivize increased grid flexibility and 2) the
creation of more equitable cost-sharing mechanisms in the wake of expanding data
center development. The brief concludes by outlining several critical questions which
will guide the Project’s research over the next year.



