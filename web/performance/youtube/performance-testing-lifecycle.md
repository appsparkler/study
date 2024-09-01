# Performance Testing Life Cycle
https://www.youtube.com/watch?v=7di60jrzQLQ

## 6 phases of the cycle
1. PT Requirement Gathering
    - Purpose
        - Performance testing requirements are identified.
        - The gathered requirements are analyzed.
        - Requirements are documented in NFR document.
        - NFR document is signed
    - Approach
        - Client wants to do performance testing.
        - Stakeholders approaches performance test team.
        - Test Manager/Test Lead conducts meetings with stakeholders and/or client.
        - After thorough review, these requirements are documented. 
    - Examples
        - Site should support 50 concurrent users.
        - Browse pages (Eg. Product Category, Product Details) should not take more than 2 seconds.
        - Search pages (Eg. Search Results, Filter, Sort) should not take more than 3 seconds.
        - Cart Checkout pages (Eg. Add to Cart, Proceed to Checkout, Payment) should not take more than 2 seconds.
        - All other pages (Eg. Profile, My Orders) should not take more than 4 seconds.
        - Error rate should be less than 2%.
        - Server CPU utilization should not exceed 70%.
        - Server memory utilization should not exceed 60%.
        - Optional: During some days, site receives more traffic. Account for that too.
    - Challenges
        - Vague requirements
            - Ask questions.
            - Go through historical usage patterns.
            - If application is new, use step-up approach - load testing - keep increasing load.
        - Lot of co-ordination between different teams.
1. PT Planning
    - Purpose
        - Detailed performance test strategy and plan is prepared.
        - All these details are captured in performance test plan document.
        - Performance test plan is signed off.
    - Approach
        - Overall performance testing activities are planned and documented as
        Performance Test Plan by Test Manager or Test Lead.
        - This test plan will have details such as :
            - Performance test scope
            - Test entry and exit criteria
            - Tooling and resourcing requirements
            - Test environment and test data
            - Test execution strategy
            - Any 3rd party dependencies
            - Metrics that will be captured
            - Risk identification and mitigation steps
            - etc.
        - The test plan is reviewed and approved by project team.
1. PT Design
    - Purpose
        - Creating performance test scripts as per test plan.
        - Validating that the test scripts are working as intended.
        - Get test scripts reviewed.
    - Approach
        - Test scripts are typically created by Performance Testers.
        - They go through all scenarios documented in performance test plan.
        - Test scripts are prepared based on the requirements.
            - Recording the test scripts.
            - Enhancing the test script by adding any custom logic, think time, assertions etc.
            to simulate real world scenarios.
            - Validating the scripts.
            - Scripts are debugged if they are not working as expected.
        - Scripts are reviewed and verified by Test Manager or Test Lead.
    - Challenges
        - Unavailability of performance test environment.
            - Try to make the script reusable.
            - Validate the script thoroughly on performance test environment.
        - Unavailability of 3rd party services or required APls.
            - Mocking/service virtualization
1. Test Execution
1. Test Reporting
1. Performance Tuning