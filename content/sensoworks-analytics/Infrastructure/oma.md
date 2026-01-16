---
layout: default
title: OMA
nav_order: 1
description: OMA
has_children: true
parent: Infrastructure
grand_parent: Sensoworks Analytics
---

# OMA

### Technical insight into OMA

# What is OMA

OMA is an acronym that stands for Operational Modal Analysis. It is a technique used to determine modal parameters (frequencies, ratios
damping and mode shapes) of a structure or system based solely on its response data. Unlike analysis
traditional, which requires input and output data, OMA uses only the response data of a system under certain environmental or
operational.

Two of the main methods of processing the analysis are FDD (Frequency Domain Decomposition) and SSI (Stochastic Subspace
identification). Their characteristics are summarized below.

1. **Frequency Domain Decomposition (FDD)**
     **Principle** : FDD receives the system response data in the **time domain** and applies the Fourier Transform to visualize the
     data in the **frequency domain**.
     The peaks obtained in the spectrum are identified, as they correspond to the natural frequencies of the system.
     **Procedure**:
        the. Calculate the energy spectral density (PSD) matrix from the system output data.
ii. Apply singular value decomposition (SVD) to the newly obtained matrix to extract singular values.
iii. The peaks of the singular value plots indicate the natural frequencies of the system.
iv. Damping ratios and mode shapes can also be extracted based on singular values and singular vectors.
     **Advantages** :
        FDD is a relatively simple and intuitive method.
        It requires less computational effort than other methods.
2. **Stochastic Subspace Identification (SSI)**
     **Principle**: SSI is a method in the **time domain** that identifies a mathematical model of the system (state representation
     in space) starting from its response data.
     The modal parameters are extracted from the model.



Procedure:
the. Create a block Hankel matrix from the system output data.
ii. Perform a singular value decomposition (SVD) of the Hankel matrix.
iii. Select a number of dominant singular values and vectors.
iv. Use the selected data to construct a representation of state in space.
v. Extract the modal parameters from the state representation in space.
Advantages :
SSI is a more general method that can be employed across a wide variety of data types.
May be more accurate under certain conditions.

It's also worth noting that while OMA provides valuable insights into the dynamic behavior of a system, validating the results with a known
excitation or comparing them with results from experimental modal analysis (EMA) is often recommended.


# Parameters

1. **Date & Timeslot:** Specifies the date and time window for which the analysis is being conducted.
2. **Name:** A unique identifier for this specific analysis run.
3. **Method:** The type of analysis being used, in this case, SSI.
4. **frequency sampling:** The rate at which data is sampled or collected. It's measured in Hertz (Hz) and determines the resolution of your
    frequency analysis.


5. **decimation factor:** Decimation is the process of reducing the number of data points by skipping over some of them. A factor of 1
    typically means no decimation.
6. **rank pca (Principal Component Analysis):** This determines the number of principal components (or dominant modes) that are
    considered in the analysis. It's a dimensionality reduction step to simplify the analysis and focus on the most significant modes.
7. **n min & n max:** These parameters define the minimum and maximum order of the system or the range of modes that the algorithm will
    search for.
8. **eps cluster:** A threshold used for clustering closely spaced modes. It ensures that very close modes are treated as one to avoid
    overestimation.
9. **eps freq:** Specifies the accuracy needed when estimating the frequency. Modes with differences smaller than this value might be
    merged.
10. **eps mac (Modal Assurance Criterion):** A measure of the similarity between identified and reference mode shapes. A value close to 1
indicates a good match.
11. **eps zeta:** Specifies the accuracy needed when estimating the damping ratio.
12. **time_shift:** If there's a known delay or lag in the data acquisition, this parameter can account for it. It shifts the time data by the specified
value.
13. **detrend:** This option, when selected, removes any linear trend from the data. It's often used to eliminate low-frequency drifts in the data
that can distort the results.
14. **Description:** Allows for a detailed description or notes about the analysis for future reference.


When configuring SSI, the right choice of parameters is crucial. The values can significantly influence the results, so understanding the
physical system you're studying, along with preliminary analyses and validations, can be essential.

# Differences between FDD and SSI?


Frequency Domain Decomposition (FDD) and Stochastic Subspace Identification (SSI) are both operational modal analysis (OMA) methods
used to identify modal parameters (natural frequencies, damping ratios, and mode shapes) from output-only measurements. However, they
have distinct methodologies and characteristics:

1. **Methodology:**
    **FDD:** Operates in the frequency domain. It is based on the decomposition of the power spectral density matrix of the measured
    outputs. Peaks in the singular value plots of this matrix correspond to the system's natural frequencies.
    **SSI:** Operates in the time domain (although there are frequency domain variants). It extracts modal information from the correlation
    between measurements at different time instants. The method builds on state-space representation and subspace algorithms.
2. **Input Requirements:**
    **FDD:** Requires only the power spectral density of the data.
    **SSI:** Requires the correlation functions of the data.
3. **Complexity and Computation:**
    **FDD:** Relatively simple and straightforward, with less computational demand. Good for a quick first-pass analysis.
    **SSI:** More complex and computationally demanding but can handle a wider variety of structural behaviors and provide more detailed
    information.
4. **Mode Excitability:**
    **FDD:** May have difficulty detecting modes that are not excited strongly by the ambient excitation.
    **SSI:** Has better capability in identifying modes, even those that are not strongly excited, due to its comprehensive use of time series
    data.
5. **Damping Estimation:**
    **FDD:** Damping estimation is indirect and might be less accurate. It usually requires additional methods or considerations.
    **SSI:** Provides direct estimation of damping ratios, which can be more accurate.
6. **Mode Shapes:**
    **FDD:** Mode shapes are directly obtained from the singular vectors associated with the peaks in the singular value plot.



SSI: Mode shapes are derived from the state matrix that results from the subspace identification process.

7. **Sensitivity:**
    **FDD:** Less sensitive to noise due to its frequency domain nature.
    **SSI:** Might be more sensitive to noise, especially when dealing with high order systems, but has tools and adjustments to manage it.
8. **Applications:**
    **FDD:** Commonly used for preliminary analyses, especially when a quick modal overview is required.
    **SSI:** Used when a more detailed and accurate modal identification is needed, especially in complex structures or when some modes
    are less excited.
Both methods have their strengths and weaknesses. The choice between FDD and SSI depends on the specific requirements of the
analysis, the nature of the structure being studied, the quality and type of measurements available, and the desired level of detail in the
results.

# Other algorithms in addition to SSI and FDD


In addition to Stochastic Subspace Identification (SSI) and Frequency Domain Decomposition (FDD), there are several other algorithms and
methods used in Operational Modal Analysis (OMA) and Experimental Modal Analysis (EMA). Here's an overview of some of them:

1. **Enhanced Frequency Domain Decomposition (EFDD):**
    An enhancement of the traditional FDD method, which allows for better estimation of damping ratios using the half-power bandwidth
    method.
2. **Complex Mode Indication Function (CMIF):**
    Uses the singular values from the Frequency Response Function (FRF) to identify complex modes.
3. **PolyMAX:**
    A polynomial-based method for curve fitting in the frequency domain, often used to refine frequency and damping ratio estimates
    from other methods.
4. **Ibrahim Time Domain (ITD):**
    Operates in the time domain and identifies modal parameters using the free-decay response of the structure.
5. **Time Domain Decomposition (TDD):**
    Similar to FDD but operates directly in the time domain, using the singular value decomposition of time series data.
6. **Eigen Realization Algorithm (ERA):**
    A time-domain method that utilizes measured time responses to estimate system matrices and, subsequently, modal parameters.
7. **Curve fitting methods:**
    These are used to fit analytical functions (usually rational functions) to measured frequency response functions. Examples include the
    Rational Fraction Polynomial (RFP) method and the Complex Exponential (CE) method.
8. **Wavelet Transform:**
    Uses wavelets to transform the time-domain signal into the time-frequency domain, allowing for the identification of time-localized
    dynamic events.
9. **Random Decrement Technique (RDT):**
    A time-domain technique used to derive the free-response of a system from its response to random excitations.
10. **Covariance-driven Stochastic Subspace Identification (Cov-SSI):**


A variation of the SSI method, which uses covariance functions rather than correlation functions.

11. **Data-driven Stochastic Subspace Identification (Data-SSI):**


Unlike the classic SSI method, which operates on output correlation functions, Data-SSI operates directly on output data.
These are just a few of the methods used for modal analysis in various engineering applications. The appropriate method depends on the
type of data available, the nature of the structure, the excitation conditions, and the specific goals of the analysis.
