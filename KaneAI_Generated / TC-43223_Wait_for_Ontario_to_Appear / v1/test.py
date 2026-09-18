
from appium import webdriver
from appium.options.android import UiAutomator2Options
from selenium.webdriver.common.by import By
import time, traceback

options = UiAutomator2Options()
options.set_capability("platformName", "android")

driver = webdriver.Remote("http://localhost:4723", options=options)
try:

    def get_element(driver, locators):
        driver.implicitly_wait(6)
        if isinstance(locators[0], str):
            for locator in locators:
                try:
                    element = driver.find_element("xpath", locator)
                    if element.is_displayed() and element.is_enabled():
                        return element
                except:
                    continue
        else:
            for locator in locators:
                by_method = "xpath"
                selector = locator.get('selector', locator) if isinstance(locator, dict) else locator
                try:
                    element = driver.find_element(by_method, selector)
                    if element.is_displayed() and element.is_enabled():
                        return element
                except:
                    continue
        return None
    driver.implicitly_wait(6)

    # Step - 1 : If ontario is not visible then wait 1 second
    # While loop: If ontario is not visible then wait 1 second
    _loop_counter_ou9p = 1
    _max_iterations_ou9p = 30
    while _loop_counter_ou9p < _max_iterations_ou9p:
        user_variables["loop_counter"] = _loop_counter_ou9p
        driver.implicitly_wait(6)

        # Step - 1 : Check if ontario is visible → {{{{ontario_visible}}}}
        print('Step 1: Query - Check if ontario is visible → {{{{ontario_visible}}}}')

        _conditions_ou9p = [ResolvedCondition.from_string(condition) for condition in ['{{ontario_visible}} == false']]
        _connectors_ou9p = [ConcatenationOperator(connector) for connector in []]
        _condition_ou9p = Condition(_conditions_ou9p, _connectors_ou9p)
        _result_ou9p, _ = _condition_ou9p.evaluate(user_variables, get_variable_value)
        if not _result_ou9p:
            break
        driver.implicitly_wait(6)

        # Step - 1 : Wait 1 s
        time.sleep(int(1))

        _loop_counter_ou9p += 1
    if _loop_counter_ou9p >= _max_iterations_ou9p:
        raise Exception("While loop exceeded maximum iterations (30)")

    driver.quit()
except Exception as e:
    driver.quit()
