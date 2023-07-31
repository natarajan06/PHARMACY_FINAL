//package com.pharmacy.management.Config;
//
//import org.springframework.context.annotation.Bean;
//
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class Config {
//
//    @SuppressWarnings("removal")
//	@Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//        .csrf()
//        .disable()
//        .authorizeHttpRequests(authz -> authz .anyRequest().authenticated()).httpBasic(Customizer.withDefaults())
//        .cors(Customizer.withDefaults())
//
//        .sessionManagement()
//        .sessionCreationPolicy(SessionCreationPolicy.NEVER);
//        return http.build();
//    }
//    
//}