#!/bin/bash

# Base URL of the API
BASE_URL="http://localhost:3000"

# Test Addition
echo "--------------------------------------------"
echo "Test Addition with Route Parameters (GET /addition/2/3)"
curl -X GET "$BASE_URL/addition/2/3"
echo -e "\n"

echo "Test Addition with Query Parameters (GET /addition?a=2&b=3)"
curl -X GET "$BASE_URL/addition?a=2&b=3"
echo -e "\n"

echo "Test Addition with JSON Body (POST /addition)"
curl -X POST "$BASE_URL/addition" -H "Content-Type: application/json" -d '{"a": 2, "b": 3}'
echo -e "\n"

echo "Test Addition with URL-encoded Body (POST /addition)"
curl -X POST "$BASE_URL/addition" -H "Content-Type: application/x-www-form-urlencoded" -d "a=2&b=3"
echo -e "\n"

# Test Subtraction
echo "--------------------------------------------"
echo "Test Subtraction with Route Parameters (GET /subtraction/10/4)"
curl -X GET "$BASE_URL/subtraction/10/4"
echo -e "\n"

echo "Test Subtraction with Query Parameters (GET /subtraction?a=10&b=4)"
curl -X GET "$BASE_URL/subtraction?a=10&b=4"
echo -e "\n"

echo "Test Subtraction with JSON Body (POST /subtraction)"
curl -X POST "$BASE_URL/subtraction" -H "Content-Type: application/json" -d '{"a": 10, "b": 4}'
echo -e "\n"

echo "Test Subtraction with URL-encoded Body (POST /subtraction)"
curl -X POST "$BASE_URL/subtraction" -H "Content-Type: application/x-www-form-urlencoded" -d "a=10&b=4"
echo -e "\n"

# Test Multiplication
echo "--------------------------------------------"
echo "Test Multiplication with Route Parameters (GET /multiplication/3/5)"
curl -X GET "$BASE_URL/multiplication/3/5"
echo -e "\n"

echo "Test Multiplication with Query Parameters (GET /multiplication?a=3&b=5)"
curl -X GET "$BASE_URL/multiplication?a=3&b=5"
echo -e "\n"

echo "Test Multiplication with JSON Body (POST /multiplication)"
curl -X POST "$BASE_URL/multiplication" -H "Content-Type: application/json" -d '{"a": 3, "b": 5}'
echo -e "\n"

echo "Test Multiplication with URL-encoded Body (POST /multiplication)"
curl -X POST "$BASE_URL/multiplication" -H "Content-Type: application/x-www-form-urlencoded" -d "a=3&b=5"
echo -e "\n"

# Test Division
echo "--------------------------------------------"
echo "Test Division with Route Parameters (GET /division/10/2)"
curl -X GET "$BASE_URL/division/10/2"
echo -e "\n"

echo "Test Division with Query Parameters (GET /division?a=10&b=2)"
curl -X GET "$BASE_URL/division?a=10&b=2"
echo -e "\n"

echo "Test Division with JSON Body (POST /division)"
curl -X POST "$BASE_URL/division" -H "Content-Type: application/json" -d '{"a": 10, "b": 2}'
echo -e "\n"

echo "Test Division with URL-encoded Body (POST /division)"
curl -X POST "$BASE_URL/division" -H "Content-Type: application/x-www-form-urlencoded" -d "a=10&b=2"
echo -e "\n"

# Test Division by Zero
echo "--------------------------------------------"
echo "Test Division by Zero (GET /division?a=10&b=0)"
curl -X GET "$BASE_URL/division?a=10&b=0"
echo -e "\n"

# Test Modulus
echo "--------------------------------------------"
echo "Test Modulus with Route Parameters (GET /modulus/10/3)"
curl -X GET "$BASE_URL/modulus/10/3"
echo -e "\n"

echo "Test Modulus with Query Parameters (GET /modulus?a=10&b=3)"
curl -X GET "$BASE_URL/modulus?a=10&b=3"
echo -e "\n"

echo "Test Modulus with JSON Body (POST /modulus)"
curl -X POST "$BASE_URL/modulus" -H "Content-Type: application/json" -d '{"a": 10, "b": 3}'
echo -e "\n"

echo "Test Modulus with URL-encoded Body (POST /modulus)"
curl -X POST "$BASE_URL/modulus" -H "Content-Type: application/x-www-form-urlencoded" -d "a=10&b=3"
echo -e "\n"

echo "--------------------------------------------"
echo "All tests completed."
