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
    
1. Test Design
1. Test Execution
1. Test Reporting
1. Performance Tuning